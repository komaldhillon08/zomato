let isOrderAccepted = false;
let isvaletFound = false;

window.addEventListener('load', () => {
    document.getElementById('acceptOrder').addEventListener('click', function () {
        askRejectOrAccepted();
        checkIfAcceptReject();
    });
});

function askRejectOrAccepted() {
    setTimeout(() => {
        isOrderAccepted = confirm("Accept or reject your order");
        console.log(isOrderAccepted);
    }, 1000);
}

// Step two: Check if the order is rejected or accepted
function checkIfAcceptReject() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOrderAccepted) {
                resolve(true);  // Resolves when order is accepted
            } else {
                reject(false);  // Rejects when order is not accepted
            }
        }, 5000);
    });

    promise
        .then((result) => {
            console.log("Order accepted:", result);  // Do something when the order is accepted
        })
        .catch((error) => {
            console.log("Order rejected:", error);  // Do something when the order is rejected
        });
}
