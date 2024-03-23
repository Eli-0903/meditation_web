from django.shortcuts import render


def news_home(request):
    return render(request, 'main/main_page.html', )