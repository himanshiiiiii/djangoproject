from django.http import HttpResponse
from django.shortcuts import render
def homePage(request):
    # data={
    #     'title':'Home Page',
    #      'bdata':"Welcome",
    #      'clist':['PHP','Java','Django'],
    #      'num':[10,20,30],
    #      'student_details':[
    #          {'name':'himanshi','phone':9336744005},
    #              {'name':'himani','phone':9598792562},
    #      ]
    # }
    return render(request,"index.html")
def aboutUs(request):
    return HttpResponse("Welcome")
def course(request):
    return HttpResponse("Welcome")