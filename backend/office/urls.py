from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from office import views

urlpatterns = [
    path("alloffices", views.get_all_offices),
    path('proposal_form', views.Proposals_form, name = 'ProposalForm'),
]