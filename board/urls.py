from django.urls import path
from board import views, login

urlpatterns = [
    path('',views.Board.as_view(), name="board"),
    path('login/',login.Login.as_view(), name="login")
]