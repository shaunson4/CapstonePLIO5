from django.db import models

# Create your models here.
class Office (models.Model):
    buildingName = models.CharField(max_length=100)
    address = models.CharField(max_length =200, blank=True)
    latitude = models.DecimalField(max_digits=10, decimal_places=8, default="")
    longitude = models.DecimalField(max_digits=11, decimal_places=8, default="")
    # name = models.TextField()
    # lati = models.TextField()
    # longi = models.TextField()
    #add more
