from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class Board(TemplateView):
    template_name = "board/board.html"
