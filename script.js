var calbtn = document.getElementById('cb');
var resultc = document.getElementById('resultdiv');
var da = document.getElementById('da');
var ir = document.getElementById('ir');
var peri = document.getElementById('period');
var dt = document.querySelectorAll('input[type = "radio"]');
var mc  = document.getElementById('mc');
var body = document.body;
var ta = document.getElementById('amount');
var payingtype = document.querySelector('.pw');
var depa = document.getElementById('dda');
var inter = document.getElementById('di');
var matradio =document.querySelector('#atmaturity');
var ti = document.getElementById('ti');



// console.log(payingtype.textContent);

// console.log(dt);
// console.log(peri.value);


//event listners
calbtn.addEventListener('click',calculate);

// functions

// finction for validate

//function for calculate
function calculate(e){

    e.preventDefault();

    var month = Number(peri.value);
    var selectedValue = "";
    var depositamount = parseInt(da.value);
    var intersetrate = parseInt(ir.value);
    var totAmount;
    var interset;

    dt.forEach(function(radio){
      if(radio.checked){
        selectedValue = radio.value;
      }
    });

    if(ir.value =="" || da.value=="" || month==""|| selectedValue=="" ){
      alert("fill the all form filels");
    }else{

    }

    if(selectedValue == "atmaturit"){

      totAmount = depositamount*Math.pow((1+intersetrate/100/12),(12*month/12));

      payingtype.textContent = "Interest Paid At Maturity"
      depa.textContent = depositamount.toLocaleString('en-Us',{
        minimumFractionDigits:2,
        maximumFractionDigits:2
      });
      ti.textContent = "Total Amount (LKR)";
      interset = totAmount-depositamount
      inter.textContent = totAmount.toFixed(2);

      ta.textContent = interset.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
      

    }

    if(selectedValue == "monthly" && month>=12){

      totAmount = (depositamount*intersetrate/100/12);

      ta.textContent = totAmount.toLocaleString('en-Us',{
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });

      payingtype.textContent = "Interest Paid Monthly";
      depa.textContent = depositamount.toLocaleString('en-Us',{
        maximumFractionDigits:2,
        maximumSignificantDigits : 2
      });

      interset = totAmount*month;
      var totalAmount  = interset+depositamount;
      inter.textContent = totalAmount.toLocaleString('en-US',{
        minimumFractionDigits:2,
        maximumFractionDigits:2
      });
    }else if(selectedValue == "monthly" && month<12){
      alert("deposit period should be greate than or equal to 12 months");
    }

    

    

    

  

    





}





