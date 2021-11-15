from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from django.contrib import auth
import json

# Create your views here.
class Login(TemplateView):
	template_name = "login/login.html"

	def get(self, request):
		data = json.dumps(request.GET)
		context = json.loads(data)
		print(f'DATA: {context["Username"]}')
		user = auth.authenticate(
			username=context["Username"],
			password=context["Password"])
		if user is not None:
			print(user)
			# auth.login(request, user)
			# if 'next' in request.POST: # to see if there is a next query coming from login_required decorator
			# 	return redirect(request.POST.get('next')) 
			# else:
			# 	return redirect('index')
		else:
			print('User not login')
			# return render(request,
			# 	'login.html',
			# 	{'error':'username or password is incorrect.'})
		return render(
		request, self.template_name, request.GET,
		)