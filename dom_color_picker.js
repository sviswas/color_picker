let color_pick=document.getElementById("colorPickerContainer");
let btn_id=document.getElementById("btn_id");
let input_id=document.getElementById("input_id");
let color_select=document.getElementById("selectedColorHexCode");
btn_id.addEventListener("click",function(){
    if(input_id.value===""){
        alert("Enter the color name....");
        return;
    }
        color_pick.style.backgroundColor=input_id.value;
        color_select.textContent=input_id.value;
        color_select.style.color=input_id.value;
}); 