import logging

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render

import urllib
import urllib3
import json

# Create your views here.

def get_weather(request):
    try:

        # url = 'https://rest.nexmo.com/sms/json?' + urllib.urlencode(params)

        url = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/72758?apikey=482FzuLf5VOHURPyFDHzXOOTwfsrjNwX'

        http = urllib3.PoolManager()

        r = http.request('GET', url)

        return HttpResponse(r.data)

    except Exception as e:
        logging.error(e)

        return HttpResponse(e)
