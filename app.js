//Listener for Submit
document.getElementById('loan-form').addEventListener('submit',function(e){

    //Hide Results
    document.getElementById('results').style.display = 'none';

    //Show Loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculatetResults, 2000);

    
    e.preventDefault();
});

//Calculate Results
function calculatetResults(){
 
    console.log("Calculating......"); 
    //UI Variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculateInterest = parseFloat(interest.value) / 100 / 12;
    const calculatePayments = parseFloat(years.value) * 12;

    //Compute monthly Payments
    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principle*x*calculateInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatePayments).toFixed(2);
        totalInterest.value = ((monthly*calculatePayments)-principle).toFixed(2);

        //Show Results
        document.getElementById('results').style.display = 'block';

        //Hide Loader
        document.getElementById('loading').style.display = 'none';
    }else{

        showError('Please Check Your Number');
    }
}

//Show error function
function showError(error){
//Hide  Results
document.getElementById('results').style.display = 'none';

//Hide Loader
document.getElementById('loading').style.display = 'none';


    //Create Div
    const errorDiv = document.createElement('div');
   
    //Get Elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
 
    //Add Class
    errorDiv.className = 'alert alert-danger';

    //Create Text Node and append that to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv, heading);

    //Clear error after 3 seconds
    setTimeout(clearError,3000);


}

 //Clear error
 function clearError(){
     document.querySelector('.alert').remove();
 }