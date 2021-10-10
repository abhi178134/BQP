from rest_framework import serializers 
from ApplicantsApp.models import Applicants

class ApplicantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Applicants
        fields = ('id',
                 'regno',
                 'name',
                 'state')
class StateSerializer(serializers.Serializer):
    state = serializers.CharField()
    count = serializers.IntegerField()