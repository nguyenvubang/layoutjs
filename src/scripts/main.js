// Main

var appSEO = {
    title: 'Khoá học WP',
    url: 'demo.com',
    address: 'Viet Nam',
    map: {
        lg: '',
        ln: '',

    }

}

for(var key in appSEO) { 
    if (appSEO.hasOwnProperty(key)) {
        // xét Điều Kiện
        if(typeof appSEO[key] !== 'object') {
            $('#genform').append(builForm(key, appSEO[key] ))
        }
        // $('#genform').append(inputTmp)
    }
    // console.log(typeof appSEO[key])
    
 }

 function builForm(a, b) {
     return '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text" id="seo-'+key+'">'+key+'</span></div> <input class="form-control" type="text" placeholder="'+appSEO[key]+'" aria-label="Username" aria-describedby="basic-addon1"> </div>'
 }
 

$(document).ready(function () {
    
})

// Main