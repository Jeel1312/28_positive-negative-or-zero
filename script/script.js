function check() {

    let a = document.getElementById("num").value;
    
    if( a > 0){
        document.getElementById("type").innerHTML ="The number " + a + " is positive."
    }
    else if ( a < 0){
        document.getElementById("type").innerHTML ="The number " + a + " is negative."
    }
    else{
        document.getElementById("type").innerHTML ="The number " + a + " is zero."
    }

}