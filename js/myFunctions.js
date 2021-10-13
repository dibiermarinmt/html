function getDoctor(){
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            plotDoctor(respuesta.items)
        }
    });
}

function plotDoctor(items){
    let myTable="<table>";
    for(i=0; i<items.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].specialty+"</td>";
        myTable+="<td>"+items[i].graduate_year+"</td>";
        myTable+="<td>"+items[i].department_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='deleteDoctor("+items[i].id+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#doctores").empty();
    $("#doctores").append(myTable);
}

function postDoctor(){
    let myData={
        id:$("#idDoctor").val(),
        specialty:$("#specialty").val(),
        graduate_year:$("#graduate_year").val(),
        department_id:$("#department_id").val(),
        name:$("#nameDoctor").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#doctores").empty();
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            getDoctor();
            alert("Se ha guardado el dato");
        }
    });
}

function putDoctor(){
    let myData={
        id:$("#idDoctor").val(),
        specialty:$("#specialty").val(),
        graduate_year:$("#graduate_year").val(),
        department_id:$("#department_id").val(),
        name:$("#nameDoctor").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#doctores").empty();
            $("#id").val("");
            $("#specialty").val("");
            $("#graduate_year").val("");
            $("#department_id").val("");
            $("#name").val("");
            getDoctor();
            alert("Se ha actualizado");
        }
    });
}

function deleteDoctor(idDoctor){
    let myData={
        id:idDoctor
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/doctor/doctor",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#doctores").empty();
            getDoctor();
            alert("Se ha eliminado");
        }
    });
}





function getClient(){
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            plotClient(respuesta.items)
        }
    });
}

function plotClient(items){
    let myTable="<table>";
    for(i=0; i<items.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='deleteClient("+items[i].id+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#clientes").empty();
    $("#clientes").append(myTable);
}

function postClient(){
    let myData={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#clientes").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            getClient();
            alert("Se ha guardado el dato");
        }
    });
}

function putClient(){
    let myData={
        id:$("#idClient").val(),
        name:$("#nameClient").val(),
        email:$("#email").val(),
        age:$("#age").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#clientes").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            getClient();
            alert("Se ha actualizado");
        }
    });
}

function deleteClient(idClient){
    let myData={
        id:idClient
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#clientes").empty();
            getClient();
            alert("Se ha eliminado");
        }
    });
}





function getMessage(){
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            plotMessage(respuesta.items)
        }
    });
}

function plotMessage(items){
    let myTable="<table>";
    for(i=0; i<items.length; i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='deleteMessage("+items[i].id+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#mensajes").empty();
    $("#mensajes").append(myTable);
}

function postMessage(){
    let myData={
        id:$("#idMessage").val(),
        messagetext:$("#messagetext").val()
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#mensajes").empty();
            $("#id").val("");
            $("#messagetext").val("");
            getMessage();
            alert("Se ha guardado el dato");
        }
    });
}

function putMessage(){
    let myData={
        id:$("#idMessage").val(),
        specialty:$("#messagetext").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#mensajes").empty();
            $("#id").val("");
            $("#messagetext").val("");
            getMessage();
            alert("Se ha actualizado");
        }
    });
}

function deleteMessage(idMessage){
    let myData={
        id:idMessage
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gd89ec6b8232443-dbreto.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#mensajes").empty();
            getMessage();
            alert("Se ha eliminado");
        }
    });
}
