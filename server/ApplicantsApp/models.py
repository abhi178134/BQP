from django.db import models

# Create your models here.
class Applicants(models.Model):
    regno = models.IntegerField(blank = False)
    name = models.CharField(max_length=20,blank = False, default = '')
    state = models.CharField(max_length=2,blank = False)