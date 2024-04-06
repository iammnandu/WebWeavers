from django.shortcuts import render

def MyTemplateView(request):
    return render(request, "index.html")