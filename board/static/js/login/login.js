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
        },
        Verify: function(e, data){
            var $self = Login.config,
                $route  = (typeof(e) == 'object') ? e.data.param : e;

            switch($route){
                case 1:
                    $username = $self.form_login.find('[name=username]').val()
                    $password = $self.form_login.find('[name=password]').val()
                    console.log('Verify.case1')
                    if ($username.length === 0){
                        toast.fire({
                            icon: 'warning',
                            title: `&nbsp Username is required`
                        })
                    }
                    if ($password.length === 0){
                        toast.fire({
                            icon: 'warning',
                            title: `&nbsp Password is required`
                        })
                    }
                    $data = $self.form_login.serializeArray();
                    console.log($data)
                    $data.push(
                         {name:'Username', value: $username}
                        ,{name:'Password', value: $password}
                        ,{name:'Action',   value: 1}
                    );
                    toast.fire({
                        icon: 'success',
                        title: `&nbsp${$username} & ${$password}`
                    })
                    Login.CallAjax('/board/login/', $data , 1, 'GET');  
                break
                case 2:
                    return
                break;
            }
        },
        CallAjax: function(url, data, route, method_type){
            var $self       = Login.config, timer, data_object = {},
                $base_host  = $.trim($self.content_wrapper.attr('data-host')),
                $url        =  $base_host + url;


            $.ajax({
                    type: method_type,
                    url: $url,
                    data: data,
                    dataType:'json',
                    beforeSend: function(){
                        timer && clearTimeout(timer);
                        timer = setTimeout(function()
                        {
                            $("body").addClass("loading"); 
                        },
                        1000);                    
                        //DISABLE BUTTON

                        switch(route){
                            // case 1: $self.btn_search.prop('disabled', true); break;
                            // case 2: 
                            //         // $(data).each(function(i, field){
                            //         //     data_object[field.name] = field.value;
                            //         // });                            
                            //         // $tr           = $self.tbl_promo_list.find('tr#' + data_object['PromoID']);
                            //         // $td_last      = $tr.find('td:last');                                    

                            //         // $td_last.find('input').attr('disabled', true);
                            // break;
                            // case 3: $self.btn_save.prop('disabled', true); break;                            
                            // case 5: $self.btn_send_email.prop('disabled', true); break;                            
                        }
                    },
                    complete: function(){
                        clearTimeout(timer);
                        $("body").removeClass("loading"); 
                        //ENABLE BUTTON

                        switch(route){
                            // case 1: $self.btn_search.removeAttr('disabled'); break;
                            // case 2: 
                            //         // $(data).each(function(i, field){
                            //         //     data_object[field.name] = field.value;
                            //         // });                            
                            //         // $tr           = $self.tbl_venue_list.find('tr#' + data_object['brandID']);
                            //         // $td_last      = $tr.find('td:last');                                    

                            //         // $td_last.find('input').removeAttr('disabled');
                            // break;    
                            // case 3: $self.btn_save.removeAttr('disabled'); break;                       
                            // case 5: $self.btn_send_email.removeAttr('disabled'); break;                       
                        }                        
                    },                
                    success: function(evt){ 
                        if(evt){
                            switch(route){
                                // case 1: Venues.Search(2, evt); break; 
                                // case 2: Venues.UpdateStatus(2, evt); break; 
                                // case 3: Venues.Save(2, evt); break; 
                                // case 4: Venues.Product(2, evt); break; 
                                // case 5: Venues.SendEmail(2, evt); break; 
                                // case 6: Venues.CopyPromoLink(3, evt); break; 
                            }    
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        console.log('error: ' + textStatus + ': ' + errorThrown);
                    }
                }); 
        }//end sa callajax	
    }

    Login.Init({
         btn_login          : $('#btn-login')
        ,form_login         : $('#form-login')
        ,content_wrapper    : $('.content-wrapper')

    })
})