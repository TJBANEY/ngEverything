from django.conf.urls import url
from .views import get_weather

urlpatterns = [
    url(r'^get_weather/(?P<zipcode>.+)/', get_weather, name='get_weather')
]