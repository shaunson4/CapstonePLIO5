from rest_framework import serializers
from .models import Office_details

class OfficeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Office_details
        fields = ['buildingName', 'address', 'lati', 'longi']