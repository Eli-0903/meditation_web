from django.shortcuts import render
from django.http import HttpResponse




def index(request):
    return render(request, 'main/login_page.html')

def about(request):
    return render(request, 'main/main_page.html')
