from django.shortcuts import redirect, render
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
		username = context['Username']
		print(f"DATA: {username}")
		# user = auth.authenticate(
		# 	username=context["Username"],
		# 	password=context["Password"])
		# if user is not None:
		# 	print(user)
		# 	return redirect('board')
		# 	# auth.login(request, user)
		# 	# if 'next' in request.POST: # to see if there is a next query coming from login_required decorator
		# 	# 	return redirect(request.POST.get('next')) 
		# 	# else:
		# 	# 	return redirect('index')
		# else:
		# 	print('User not login')
		# 	return redirect('login')
		# 	# return render(request,
		# 	# 	'login.html',
		# 	# 	{'error':'username or password is incorrect.'})
		return render(
		request, self.template_name, request.GET,
		)