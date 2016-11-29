import logging

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render

import urllib
import urllib3
import json

# Create your views here.

def get_weather(request, zipcode):
    try:
        # Get the code for the location using the zipcode

        http = urllib3.PoolManager()

        # location_url = 'http://dataservice.accuweather.com/locations/v1/US/search.json?q=' + zipcode + '&apiKey=482FzuLf5VOHURPyFDHzXOOTwfsrjNwX&language=en'
        # location_json = http.request('GET', location_url)
        # x = location_json.data

        url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + zipcode + '&mode=json&units=Imperial&appid=f4142c8df1050150f650e85e7badce86&cnt=7'
        r = http.request('GET', url)

        return HttpResponse(r.data, content_type='application/json')

    except Exception as e:
        logging.error(e)

        return HttpResponse(e)
