function zeichenKette() {
  const inputZeichenkette = document.querySelector(".input-first").value;
  const inputTrennungspunkt = document.querySelector(".input-second").value;
  const inputRadioOne = document.querySelector("#radioone").checked;
  const inputRadioTwo = document.querySelector("#radiotwo").checked;
  const errorOne = document.querySelector("form p");
  const ausgabeEins = document.querySelector(".ausgabeEins");
  const ausgabeZwei = document.querySelector(".ausgabeZwei");

  console.log(inputRadioOne);

  if (
    inputZeichenkette.length > 0 &&
    inputTrennungspunkt.length > 0 &&
    (inputRadioOne || inputRadioTwo)
  ) {
    errorOne.innerHTML = "";
    if (inputZeichenkette.indexOf(inputTrennungspunkt) > 0) {
      if (inputRadioOne) {
        (ausgabeEins.innerHTML = inputZeichenkette.slice(
          0,
          inputZeichenkette.indexOf(inputTrennungspunkt)
        )),
          (ausgabeZwei.innerHTML = inputZeichenkette.slice(
            inputZeichenkette.indexOf(inputTrennungspunkt)
          ));
      } else if (inputRadioTwo) {
        (ausgabeEins.innerHTML = inputZeichenkette.slice(
          0,
          inputZeichenkette.indexOf(inputTrennungspunkt) + 1
        )),
          (ausgabeZwei.innerHTML = inputZeichenkette.slice(
            inputZeichenkette.indexOf(inputTrennungspunkt) + 1
          ));
      } else {
        errorOne.innerHTML = "Wähle eine der beiden Optionen aus";
      }
    } else {
      errorOne.innerHTML = "Zeichen ist nicht in Zeichenkette enthalten";
    }
  } else {
    errorOne.innerHTML = "Bitte fülle alle Felder aus";
  }
}

// if (
//     inputZeichenkette.length > 0 &&
//     inputTrennungspunkt.length > 0 &&
//     (inputRadioOne || inputRadioTwo)
//   ) {
//     errorOne.innerHTML = "";
//   } else {
//     errorOne.innerHTML = "Bitte fülle alle Felder aus";
//   }
// }
