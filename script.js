const billingToggle = document.getElementById("billingToggle");

const prices = document.querySelectorAll(".price");

const periods = document.querySelectorAll("small");

billingToggle.addEventListener("change", function () {

    prices.forEach(function (price) {

        if (billingToggle.checked) {

            price.textContent = price.dataset.yearly;

        } else {

            price.textContent = price.dataset.monthly;

        }

    });

    periods.forEach(function (period) {

        if (billingToggle.checked) {
            period.textContent = "/year";
        } else {
            period.textContent = "/month";
        }

    });

});
