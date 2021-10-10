from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from rest_framework import status
from rest_framework import serializers 
from ApplicantsApp.models import Applicants
from ApplicantsApp.serializers import ApplicantSerializer
from ApplicantsApp.serializers import StateSerializer
from rest_framework.decorators import api_view
from django.db.models import Count

ok = set(Applicants.objects.all().values_list("state").annotate(freq=Count("state")))

@api_view(['GET','POST'])
def  applicants_list(request):
    #List of Applicants get & Post will work here
    if request.method == 'POST':
        applicant_data = JSONParser().parse(request)
        applicant_serializer = ApplicantSerializer(data=applicant_data)
        if applicant_serializer.is_valid():
            applicant_serializer.save()
            return JsonResponse(applicant_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(applicant_serializer.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        applicants = Applicants.objects.all()
        applicant_serializer = ApplicantSerializer(applicants,many = True)
        return JsonResponse(applicant_serializer.data, safe = False) 
     
@api_view(['GET'])
def states_count(request):
    if request.method == 'GET':
        states = Applicants.objects.values('state')
        states = states.annotate(count=Count('state'))
        states = states.order_by('state')
        state_serializer = StateSerializer(states,many=True)
        return JsonResponse(state_serializer.data, safe = False) 

@api_view(['GET','PUT','DELETE'])
def applicants_detail(request,pk):
    #Find applicant by pk
    try:
        applicant = Applicants.objects.get(regno=pk)
    except Applicants.DoesNotExist:
        return JsonResponse({'message':'The Applicant doesn\'t exist'}, status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        applicant.delete()
        return JsonResponse({'message':'The applicant was deleted successfully'},status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'GET':
        applicant_serializer = ApplicantSerializer(applicant,many = False)
        return JsonResponse(applicant_serializer.data)