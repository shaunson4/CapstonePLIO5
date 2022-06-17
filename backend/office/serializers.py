from rest_framework import serializers
from .models import Office_details

class OfficeSerializer(serializers.ModelSerializer):

    class Office_details:
        model = Office_details
        fields = ['buildingName', 'address', 'lati', 'longi']