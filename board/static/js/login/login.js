$(document).ready(function(){
    var Login = {
        Init: function(config){
            this.config = config;
            this.BindEvents();
        },
        BindEvents: function(){
            var $self = this.config;

            $self.btn_login.on('click', {param:1}, this.Verify);

            Login.OnLoadPage();
        },
        OnLoadPage: function(){
            var $self = Login.config;

            toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
            });

            toast.fire({
                icon: 'success',
                title: `&nbspSuccess!`
            })
        },
        Verify: function(e, data){
            var $self = Login.config,
                $route  = (typeof(e) == 'object') ? e.data.param : e;

            switch($route){
                case 1:
                    username = $self.form_login.find('[name=username]').val()
                    password = $self.form_login.find('[name=password]').val()
                    console.log('Verify.case1')
                    toast.fire({
                        icon: 'success',
                        title: `&nbsp${username} & ${password}`
                    })
                break
            }
        }
    }

    Login.Init({
         btn_login       : $('#btn-login')
        ,form_login      : $('#form-login')

    })
})