from rest_framework import serializers
from .models import Office

class OfficeSerializer(serializers.ModelSerializer):

    class Office:
        model = Office
        fields = ['name', 'lati', 'longi']