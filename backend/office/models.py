from django.db import models
from django.contrib.auth.models import User


# def save(self, *args, **kwargs):
#     self.revision += 1
#     return super(Office_details, self).save(*args, **kwargs)

# Create your models here.
class Office_details(models.Model):
    
    buildingName = models.TextField(max_length=100, default="")
    address = models.TextField(max_length =200, blank=True)
    lati = models.DecimalField(max_digits=10, decimal_places=8, default=None)
    longi = models.DecimalField(max_digits=10, decimal_places=8, default=None)
    #add more


class Proposals(models.Model):
    building_id = models.IntegerField(null=False)
    designer_name = models.CharField(max_length=30, null=False)
    designer_company = models.CharField(max_length=100)
    bid_amount = models.IntegerField(null=False)
    bid_desc = models.TextField(max_length=300, null=False)