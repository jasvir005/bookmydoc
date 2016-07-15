    function abd(id)
    {

    var formData = {
    userid : id,
    }; 

    var url='/get_trainder_where';


    jQuery.ajax({
    method: "GET", 
    url: baseurl+url,
    data: formData,
    async: false, //blocks window close
    success: function(response) {

    alert(response);

    //  alert("hello");
    }

    });



    }