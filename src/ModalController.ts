import * as bootstrap from "bootstrap";

export class ModalController {
    constructor() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                debugger;
                const modalSubmitSpan = <HTMLSpanElement>[...document.querySelectorAll('span')].filter(el => el.innerText === 'Submit')[0]
        
                modalSubmitSpan.addEventListener('click', (e) => {
                    debugger;
                });
            }, 5000)
        })


        var modal = <HTMLElement>document.getElementById("formModal");
        // Check if the form has been submitted previously
        if (!localStorage.getItem("formSubmitted")) {
            // Open the modal when the page is loaded
            window.addEventListener("load", function () {
                debugger;
                var modalInstance = new bootstrap.Modal(modal, {
                    backdrop: "static",
                    keyboard: false,
                });
                modalInstance.show();
            });

            // Handle form submission event
            modal.addEventListener("submit", function (event) {
                debugger;
                // Set the flag indicating the form has been submitted
                localStorage.setItem("formSubmitted", "true");
            });

        }
    }
}
