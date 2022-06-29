from rest_framework import serializers
from .models import Office_details

class OfficeSerializer(serializers.ModelSerializer):
    # lastChanged = serializers.DateTimeField(read_only=True)
    # identifier = serializers.CharField(read_only=True)
    # revision = serializers.IntegerField(read_only=True)

    class Meta:
        model = Office_details
        fields = ['id', 'buildingName', 'address', 'lati', 'longi']

    def create(self, validated_data):

        office_details = Office_details.objects.create(
            buildingName=validated_data['buildingName'],
            address=validated_data['address'],
            lati=validated_data['lati'],
            longi=validated_data['longi'] 
        )
        office_details.save()
        
        return office_details     