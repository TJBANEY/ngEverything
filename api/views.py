from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def get_weather(request):
    return HttpResponse('Weather Gotten')
