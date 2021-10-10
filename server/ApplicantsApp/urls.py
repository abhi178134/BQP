from django.conf.urls import url
from ApplicantsApp import views

urlpatterns = [
    url(r'^api/applicants$',views.applicants_list),
    url(r'^api/applicants/$',views.states_count),
    url(r'^api/applicants/(?P<pk>[0-9]+)$', views.applicants_detail)
]