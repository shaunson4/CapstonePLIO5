from dataclasses import field
from pyexpat import model
from django import forms
from .models import Proposals

class Proposal_Form(forms.ModelForm):
    class Meta:
        model = Proposals
        field = ['building_id', 'designer_name', 'designer_company', 'bid_amount', 'bid_desc']