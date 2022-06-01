//Declaración de variables
let nombreUsuario = "Leandro Pereira";
let saldoCuenta = 10000;
let limiteExtraccion = 5000;
let Agua = 350;
let Teléfono = 425;
let Luz = 210;
let Internet = 570;
let Cuentaamiga1 = 1234567;
let Cuentaamiga2 = 7654321;
//let codigoSeguridad = 1234;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
  iniciarSesion();
};

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
  limiteExtraccion = prompt("Ingresar nuevo limite de extracción");
  if (isNaN(limiteExtraccion)) {
    alert("Por favor ingresar solo números.");
  } else if (limiteExtraccion == null || limiteExtraccion == 0) {
    return;
  } else {
    alert("Tu nuevo limite de extraccion es: $" + limiteExtraccion);
  }
}

function extraerDinero(cantDinero) {
  cantDinero = prompt("Cuanto dinero desea extraer?");
  totalDinero = parseInt(saldoCuenta) - parseInt(cantDinero);
  if (cantDinero > limiteExtraccion) {
    alert(
      "La cantidad de dinero que deseas extraer es mayor a tu límite de extracción"
    );
  } else if (cantDinero > totalDinero) {
    alert(
      "No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero."
    );
  } else if (cantDinero % 100) {
    alert("Solo puede extraer billetes de 100");
  } else if (cantDinero == null || cantDinero == 0) {
    return;
  } else if (isNaN(cantDinero)) {
    alert("Por favor ingresar solo números.");
  } else {
    alert(
      "Has retirado:$" +
        cantDinero +
        "\nSaldo anterior:$" +
        saldoCuenta +
        "\nSaldo actual:$" +
        totalDinero
    );
  }
}

function depositarDinero(cantDinero) {
  cantDinero = prompt("Cuanto dinero desea depositar?");

  totalDinero = parseInt(saldoCuenta) + parseInt(cantDinero);
  if (cantDinero == null || cantDinero == 0) {
    return;
  } else if (isNaN(cantDinero)) {
    alert("Por favor ingresar solo números.");
  } else {
    alert(
      "Has depositado:$" +
        cantDinero +
        "\nSaldo anterior:$" +
        saldoCuenta +
        "\nSaldo actual:$" +
        totalDinero
    );
  }
}

function pagarServicio() {
  servicioAPagar = prompt(
    "Ingrese el número que corresponda al servicio que desea pagar:\n1-Agua" +
      "\n2-Luz" +
      "\n3-Internet" +
      "\n4-Teléfono"
  );
  if (servicioAPagar == null || servicioAPagar == 0) {
    return;
  } else if (isNaN(servicioAPagar)) {
    alert("Por favor solo ingresar números del 1 al 4.");
  } else {
    switch (servicioAPagar) {
      case "1":
        totalDinero = saldoCuenta - Agua;
        if (saldoCuenta > Agua) {
          alert(
            "Has pagado el servicio de Agua.\nSaldo anterior:$" +
              saldoCuenta +
              "\nDinero descontado:$" +
              Agua +
              "\nSaldo actual:$" +
              totalDinero
          );
        } else {
          alert("No hay suficiente saldo para pagar este servicio.");
        }
        break;
      case "2":
        totalDinero = saldoCuenta - Luz;
        if (saldoCuenta > Luz) {
          alert(
            "Has pagado el servicio de Luz.\nSaldo anterior:$" +
              saldoCuenta +
              "\nDinero descontado:$" +
              Luz +
              "\nSaldo actual:$" +
              totalDinero
          );
        } else {
          alert("No hay suficiente saldo para pagar este servicio.");
        }
        break;
      case "3":
        totalDinero = saldoCuenta - Internet;
        if (saldoCuenta > Internet) {
          alert(
            "Has pagado el servicio de Internet.\nSaldo anterior:$" +
              saldoCuenta +
              "\nDinero descontado:$" +
              Internet +
              "\nSaldo actual:$" +
              totalDinero
          );
        } else {
          alert("No hay suficiente saldo para pagar este servicio.");
        }
        break;
      case "4":
        totalDinero = saldoCuenta - Teléfono;
        if (saldoCuenta > Teléfono) {
          alert(
            "Has pagado el servicio de Teléfono.\nSaldo anterior:$" +
              saldoCuenta +
              "\nDinero descontado:$" +
              Teléfono +
              "\nSaldo actual:$" +
              totalDinero
          );
        } else {
          alert("No hay suficiente saldo para pagar este servicio.");
        }
        break;
      default:
        alert("El servicio seleccionado no existe.");
    }
  }
}

function transferirDinero() {
  montoATransferir = prompt("Ingrese el monto que desea transferir.");
  if (montoATransferir > saldoCuenta) {
    alert("No se puede transferir esa cantidad de dinero.");
  } else if (montoATransferir == null || montoATransferir == 0) {
    return;
  } else if (
    (cuentaAmiga = prompt(
      "Ingrese el número de cuenta al que desea transferir el dinero:\n1-CuentaAmiga1" +
        "\n2-CuentaAmiga2"
    ))
  ) {
    switch (cuentaAmiga) {
      case "1":
        alert(
          "Se han transferido:$" +
            montoATransferir +
            "\nCuenta destino:" +
            Cuentaamiga1
        );
        break;
      case "2":
        alert(
          "Se han transferido:$" +
            montoATransferir +
            "\nCuenta destino:" +
            Cuentaamiga2
        );
        break;
      default:
        alert("Solo puede transferir a una cuenta amiga.");
    }
  }
}

function iniciarSesion() {
  codigoSeguridad = prompt("Por favor ingresar código de seguridad:");
  if (codigoSeguridad == 1234) {
    alert(
      "Bienvenido/a Leandro Pereira, ya puede comenzar a realizar tus operaciones"
    );
  } else {
    alert(
      "Código incorrecto.Tu dinero ha sido retenido por cuestiones de seguridad"
    );
    saldoCuenta = 0;
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
  document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
  document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
  document.getElementById("limite-extraccion").innerHTML =
    "Tu límite de extracción es: $" + limiteExtraccion;
}
