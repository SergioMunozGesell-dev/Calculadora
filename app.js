let result ="";

function add(numb){
    result += numb;
    document.getElementById("result").value = result;
}
function resultado(){
    try{
        result = eval(document.getElementById("result").value);
        console.log(result);
        update(result);
    }catch(error){
        document.getElementById("result").value = "Error";
    }

}

function update(result){
    document.getElementById("result").value = result;
};

function clearInput(){
    result = "";
    document.getElementById("result").value = result;
    console.log(result);
}