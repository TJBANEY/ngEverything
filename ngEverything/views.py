from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render


def angular2_gateway(request):
    print(settings.BASE_DIR)
    return render(request, 'index.html', {})
