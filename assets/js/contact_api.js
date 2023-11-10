document
  .getElementById("hsForm_982cc657-4352-4c80-9691-5f2f1b5c3120_9322")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById(
      "firstname-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    ).value;
    const lastName = document.getElementById(
      "lastname-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    ).value;
    const companyName = document.getElementById(
      "company-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    ).value;
    const email = document.getElementById(
      "email-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    ).value;
    const phone = document.getElementById(
      "phone-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    ).value;
    const message = document.getElementById(
      "message-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    ).value;
    const accountingProgram = document.getElementById(
      "which_accounting_program_are_you_using_-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    );
    const selectedProgramOption =
      accountingProgram.options[accountingProgram.selectedIndex];
    const selectedProgram = selectedProgramOption.text;
    console.log(selectedProgram);

    const accountingManage = document.getElementById(
      "who_currently_manages_your_accounting_department_functions_-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    );
    const selectedManageOption =
      accountingManage.options[accountingManage.selectedIndex];
    const selectedManage = selectedManageOption.text;
    console.log(selectedManage);

    const companyCurrent = document.getElementById(
      "what_size_is_your_company_-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
    );
    const selectedCompanyOption =
      companyCurrent.options[companyCurrent.selectedIndex];
    const selectedCompany = selectedCompanyOption.text;
    console.log(selectedCompany);

    const formData = {
      name: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      companyName: companyName,
      message: message,
      selectedProgram: selectedProgram,
      selectedManage: selectedManage,
      selectedCompany: selectedCompany,
    };
    console.log(formData);

    fetch("http://13.51.168.236:3336/leads/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(function (response) {
        console.log("Response:", response);
        if (response.ok) {
          return response.text();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then(function (result) {
        console.log(result);
        const alertElement = document.querySelector(".alert");
        alertElement.classList.remove("error-alert");
        alertElement.classList.add("success-alert");
        alertElement.innerHTML = "Form submitted successfully!";
        alertElement.style.display = "block";

        document.getElementById(
          "firstname-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";
        document.getElementById(
          "lastname-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";
        document.getElementById(
          "email-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";
        document.getElementById(
          "phone-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";
        document.getElementById(
          "message-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";
        document.getElementById(
          "company-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";

        document.getElementById(
          "which_accounting_program_are_you_using_-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";
        document.getElementById(
          "who_currently_manages_your_accounting_department_functions_-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";
        document.getElementById(
          "what_size_is_your_company_-982cc657-4352-4c80-9691-5f2f1b5c3120_9322"
        ).value = "";

        setTimeout(function () {
          alertElement.style.display = "none";
        }, 3000);
      })
      .catch(function (error) {
        console.error("Error:", error);
        const alertElement = document.querySelector(".alert");
        alertElement.classList.remove("success-alert");
        alertElement.classList.add("error-alert");

        alertElement.innerHTML = "An error occurred. Please try again later.";
        alertElement.style.display = "block";
      });
  });
