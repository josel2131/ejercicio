
baseDeDatos = JSON.parse(localStorage.getItem("sistema-de-login"))

if (!baseDeDatos) {
    cargarDatosInicialesDeLaBaseDeDatos()
}
function guardar
function cargarDatosInicialesDeLaBaseDeDatos() {
    baseDeDatos={
        1065563816:{
            cargo: 0,
            contraseña: "Mimama2131",
            
    
        },
    };
}

async function ingresar() {
    let {value : datos} = await swal.fire({
        title:"Bienvenido",
        confirmButtonText:"Ingresar",
        html:`
        <input class="swal2-input" placeholder="numero2 de cedula" id="usuario">
        <input class="swal2-input" placeholder="cargo" id="cargo">

             
        <input class="swal2-input" placeholder="contraseña" id="contraseña">
        `,
        preConfirm: () => {
            let usuario = document.getElementById("usuario").value;
        
            let cargo = document.getElementById("cargo").value;
            let contraseña = document.getElementById("contraseña").value;
            if(!usuario){
                swal.showValidationMessage("no hay usuario");
                return false;
            }
            if(!cargo){
                swal.showValidationMessage("cargo mo existe");
                return false;
            }
            
            
            if(!contraseña){
                swal.showValidationMessage("no hay contraseña");
                return false;
            }
            let datos = baseDeDatos[usuario]
            if (!datos){
                Swal.showValidationMessage("el usuario no existe")
                return false;
            }
            if (datos.contraseña !=contraseña){
                swal.showValidationMessage("contraseña es inorrecta");
                return false;
            }
            return datos;
        },
    });
    
}