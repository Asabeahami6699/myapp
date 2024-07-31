function showForm(formId) {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById(formId).style.display = 'block';
}

function showViewForm() {
    document.getElementById("susudnv-form").style.display = "none"; 
    document.getElementById("View-form").style.display = "block"; 
}

function UserInputDataForm() {
    document.getElementById("choose").style.display = "none"; 
    document.getElementById("user-input-form").style.display = "block"; 
}

function MPaymentForm() {
    document.getElementById("choose").style.display = "none"; 
    document.getElementById("Mpayment-form").style.display = "block"; 
}

function BPaymentForm() {
    document.getElementById("choose").style.display = "none"; 
    document.getElementById("Bpayment-form").style.display = "block"; 
}

function ShowWithDashbd() {
    document.getElementById("Withdrawal-form").style.display = "none"; 
    document.getElementById("Withdrawal-dashbd").style.display = "block"; 
}

function ShowWithdlOthers() {
    document.getElementById("choose").style.display = "none"; 
    document.getElementById("OtherWithdls-form").style.display = "block"; 
}

function SPaymentForm() {
    document.getElementById("choose").style.display = "none"; 
    document.getElementById("Susutransc-form").style.display = "block"; 
}

function TBalanceForm() {
    document.getElementById("settings-form").style.display = "none"; 
    document.getElementById("Tbalance").style.display = "block"; 
}

function showConfirmationForm(){
    document.getElementById('errorSms4').style.display = 'none';

    const bankType = document.querySelector('#bank-type').value;
    const description = document.querySelector('#description-type').value;
    const accountNumber = document.querySelector('input[name="AccountNumber"]').value;
    const name = document.querySelector('input[name="Bname"]').value;
    const amount = document.querySelector('input[name="amount"]').value;
    const commission = document.querySelector('input[name="Commission"]').value;

    if (bankType === 'choose' || description === 'choose' || !accountNumber || !name || !amount || !commission) {
        document.getElementById('errorSms4').style.display = 'block';
        setTimeout(() => {
            errorSms4.style.display = 'none';
        }, 2000);
    } else {
    document.querySelector('#confirm-bank-type').textContent = bankType;
    document.querySelector('#confirm-description').textContent = description;
    document.querySelector('#confirm-account-number').textContent = accountNumber;
    document.querySelector('#confirm-name').textContent = name;
    document.querySelector('#confirm-amount').textContent = amount;
    document.querySelector('#confirm-commission').textContent = commission;

    document.getElementById('Bpayment-form').style.display = "none";
    document.getElementById('confirmation-form1').style.display = "block";
    }

}

function confirmAndSubmit() {
    const form = document.getElementById('BpaymentForm');
    const formData = {
        BankType: form.BankType.value,
        description: form.description.value,
        AccountNumber: form.AccountNumber.value,
        Bname: form.Bname.value,
        Commission: form.Commission.value,
        amount: form.amount.value
    };

    document.getElementById('confirmation-form1').style.display = 'none';
    document.getElementById('successful-sms').style.display = 'none'; 
    document.getElementById('failure-sms').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1300);

    fetch('/Userbpayment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('loading').style.display = 'none';
        if (data.success) {
            document.getElementById('loading').style.display = 'block';
            setTimeout(() => {
                document.getElementById('successful-sms').style.display = 'block';
            }, 1300);
            setTimeout(() => {
                window.location.href = '/user';
            }, 3000)
        } else {
            document.getElementById('failure-sms').style.display = 'block';
            setTimeout(() => {
                document.getElementById('failure-sms').style.display = 'none';
            }, 5000);
            document.getElementById('loading').style.display = 'none';
            setTimeout(() => {
                document.getElementById('confirmation-form1').style.display = 'block';
        },  5000);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('failure-sms').style.display = 'block';
            setTimeout(() => {
                document.getElementById('failure-sms').style.display = 'none';
            }, 5000);
            document.getElementById('loading').style.display = 'none';
            setTimeout(() => {
                document.getElementById('confirmation-form1').style.display = 'block';
        },  5000);
    });
}

function Back1() {
    document.getElementById('confirmation-form1').style.display = "none";
    document.getElementById('Bpayment-form').style.display = "block";
}

function showOtherWithdrawalConfirmationForm() {
    document.getElementById('errorSms3').style.display = 'none';

    const withdrawalType = document.querySelector('#withdrawal-type').value;
    const name = document.querySelector('#OtherWithdls-form input[name="Bname"]').value;
    const amount = document.querySelector('#OtherWithdls-form input[name="amount"]').value;

    if ( withdrawalType === 'choose' || !name || !amount) {
        document.getElementById('errorSms3').style.display = 'block';
        setTimeout(() => {
            errorSms3.style.display = 'none';
        }, 3000);
    } else {
        document.querySelector('#confirm-withdrawal-type').textContent = withdrawalType;
        document.querySelector('#confirm-other-name').textContent = name;
        document.querySelector('#confirm-other-amount').textContent = amount;
    
        document.getElementById('OtherWithdls-form').style.display = "none";
        document.getElementById('confirmation-form2').style.display = "block";
    }
}

function submitOtherWithdrawalForm() {
    const form = document.getElementById('otherWithdrawalForm');
    const formData = {
        withdrawalType: form.withdrawalType.value,
        Bname: form.Bname.value,
        amount: form.amount.value
    };

    document.getElementById('confirmation-form2').style.display = 'none';
    document.getElementById('successful-sms').style.display = 'none'; 
    document.getElementById('failure-sms').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1300);

    fetch('/UserOtherTrans', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('loading').style.display = 'none';
        if (data.success) {
            document.getElementById('loading').style.display = 'block';
            setTimeout(() => {
                document.getElementById('successful-sms').style.display = 'block';
            }, 1300);
            setTimeout(() => {
                window.location.href = '/user';
            }, 3000);
        } else {
            document.getElementById('failure-sms').style.display = 'block';
            setTimeout(() => {
                document.getElementById('failure-sms').style.display = 'none';
            }, 5000);
            document.getElementById('loading').style.display = 'none';
            setTimeout(() => {
                document.getElementById('confirmation-form2').style.display = 'block';
            },  5000);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('failure-sms').style.display = 'block';
        setTimeout(() => {
             document.getElementById('failure-sms').style.display = 'none';
        }, 5000);
            document.getElementById('loading').style.display = 'none';
        setTimeout(() => {
                document.getElementById('confirmation-form2').style.display = 'block';
        },  5000);
    });
}

function Back2() {
    document.getElementById('confirmation-form2').style.display = "none";
    document.getElementById('OtherWithdls-form').style.display = "block";
}

function showSusuConfirmationForm() {
    document.getElementById('errorSms2').style.display = 'none';

    const name = document.querySelector('#Susutransc-form input[name="name"]').value;
    const description = document.querySelector('#susu-description-type').value;
    const accountNumber = document.querySelector('#Susutransc-form input[name="AccountNumber"]').value;
    const amount = document.querySelector('#Susutransc-form input[name="amount"]').value;

    if ( description === 'choose' || !name || !amount) {
        document.getElementById('errorSms2').style.display = 'block';
        setTimeout(() => {
            errorSms2.style.display = 'none';
        }, 3000);
    } else {
        document.querySelector('#confirm-susu-name').textContent = name;
        document.querySelector('#confirm-susu-description').textContent = description;
        document.querySelector('#confirm-susu-account-number').textContent = accountNumber;
        document.querySelector('#confirm-susu-amount').textContent = amount;
    
        document.getElementById('Susutransc-form').style.display = "none";
        document.getElementById('confirmation-form3').style.display = "block";
    }
}

function submitSusuTransForm() {
    const form = document.getElementById('susuTransForm');
    const formData = {
        description: form.description.value,
        name: form.name.value,
        amount: form.amount.value,
        AccountNumber: form.AccountNumber.value
    };

    document.getElementById('confirmation-form3').style.display = 'none';
    document.getElementById('successful-sms').style.display = 'none'; 
    document.getElementById('failure-sms').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1300);

    fetch('/susutransform', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('loading').style.display = 'none';
        if (data.success) {
            document.getElementById('loading').style.display = 'block';
            setTimeout(() => {
                document.getElementById('successful-sms').style.display = 'block';
            }, 1300);
            setTimeout(() => {
                window.location.href = '/user';
            }, 3000); 
        } else {
            document.getElementById('failure-sms').style.display = 'block';
            setTimeout(() => {
                document.getElementById('failure-sms').style.display = 'none';
            }, 5000);
            document.getElementById('loading').style.display = 'none';
            setTimeout(() => {
                document.getElementById('confirmation-form3').style.display = 'block';
            },  5000);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('failure-sms').style.display = 'block';
        setTimeout(() => {
            document.getElementById('failure-sms').style.display = 'none';
        }, 5000);
        document.getElementById('loading').style.display = 'none';
        setTimeout(() => {
                document.getElementById('confirmation-form3').style.display = 'block';
        }, 5000);
    });
}

function Back3() {
    document.getElementById('confirmation-form3').style.display = "none";
    document.getElementById('Susutransc-form').style.display = "block";
}

function UserInputsConfirmationForm(formNumber) {
    let confirmationContent = '';
    let form;
    let errorMessageId;
    let formData = {};

    switch(formNumber) {
        case 1:
            form = document.getElementById('Uform1');
            errorMessageId = 'error-messageIPC';
            formData = {
                TranscType: form.querySelector('select[name="TranscType"]').value,
                openb: form.querySelector('select[name="openb"]').value,
                Intialamount: form.querySelector('input[name="Intialamount"]').value
            };
            confirmationContent = `
                <p>Initial Physical Cash Amount: GHC ${formData.Intialamount}</p>
            `;
            break;
        case 2:
            form = document.getElementById('Uform2');
            errorMessageId = 'error-messagePCC';
            formData = {
                TranscdType: form.querySelector('select[name="TranscdType"]').value,
                deposit: form.querySelector('select[name="deposit"]').value,
                depositedamount: form.querySelector('input[name="depositedamount"]').value
            };
            confirmationContent = `
                <p>Physical Cash Collected Amount: GHC ${formData.depositedamount}</p>
            `;
            break;
        case 3:
            form = document.getElementById('Uform3');
            errorMessageId = 'error-messageECP';
            formData = {
                selt: form.querySelector('select[name="selt"]').value,
                factor: form.querySelector('input[name="factor"]').value,
                amount: form.querySelector('input[name="amount"]').value
            };
            confirmationContent = `
                <p>Title: ${formData.selt}</p>
                <p>Description: ${formData.factor}</p>
                <p>Amount: GHC ${formData.amount}</p>
            `;
            break;
        default:
            return;
    }

    const inputs = form.querySelectorAll('input, select');
    let allFieldsFilled = true;

    inputs.forEach(input => {
        if (!input.value || input.value === 'choose') {
            allFieldsFilled = false;
        }
    });

    if (!allFieldsFilled) {
        const errorMessage = document.getElementById(errorMessageId);
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000); 
    } else {
        document.getElementById('confirmation-content').innerHTML = confirmationContent;
        document.getElementById('user-input-form').style.display = 'none';
        document.getElementById('confirmation-form4').style.display = 'block';

        document.getElementById('confirm-UI').onclick = function() {
            submitForm(formNumber, formData);
        };
    }
}

function submitForm(formNumber, formData) {
    let url;
    switch(formNumber) {
        case 1:
            url = '/UserInputs1';
            break;
        case 2:
            url = '/UserInputs2';
            break;
        case 3:
            url = '/UserInputs3';
            break;
        default:
            return;
    }

    document.getElementById('confirmation-form4').style.display = 'none';
    document.getElementById('successful-sms').style.display = 'none'; 
    document.getElementById('failure-sms').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1300);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('loading').style.display = 'none';
        if (data.success) {
            document.getElementById('loading').style.display = 'block';
            setTimeout(() => {
                document.getElementById('successful-sms').style.display = 'block';
            }, 1300);
            setTimeout(() => {
                window.location.href = '/user';
            }, 3000);
        } else {
            document.getElementById('failure-sms').style.display = 'block';
            setTimeout(() => {
                document.getElementById('failure-sms').style.display = 'none';
            }, 5000);
            document.getElementById('loading').style.display = 'none';
            setTimeout(() => {
                document.getElementById('confirmation-form4').style.display = 'block';
            }, 5000); 
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('failure-sms').style.display = 'block';
        setTimeout(() => {
            document.getElementById('failure-sms').style.display = 'none';
        }, 5000);
        document.getElementById('loading').style.display = 'none';
        setTimeout(() => {
            document.getElementById('confirmation-form4').style.display = 'block';
        }, 5000);
    });
}

function Back4() {
    document.getElementById('confirmation-form4').style.display = "none";
    document.getElementById('user-input-form').style.display = "block";
}

function showMoMoConfirmationForm() {
    document.getElementById('errorSms1').style.display = 'none';

    const momoType = document.querySelector('#momo').value;
    const description = document.querySelector('#description-type-momo').value;
    const momoNumber = document.querySelector('#Mpayment-form input[name="momonumber"]').value;
    const name = document.querySelector('#Mpayment-form input[name="Bname"]').value;
    const amount = document.querySelector('#Mpayment-form input[name="amount"]').value;
    const commission = document.querySelector('#Mpayment-form input[name="Commission"]').value;

    if (momoType === 'choose' || description === 'choose' || !momoNumber || !name || !amount || !commission) {
        document.getElementById('errorSms1').style.display = 'block';
        setTimeout(() => {
            errorSms1.style.display = 'none';
        }, 3000);
    } else {
        document.querySelector('#confirm-momo-type').textContent = momoType;
        document.querySelector('#confirm-momo-description').textContent = description;
        document.querySelector('#confirm-momo-number').textContent = momoNumber;
        document.querySelector('#confirm-momo-name').textContent = name;
        document.querySelector('#confirm-momo-amount').textContent = amount;
        document.querySelector('#confirm-momo-commission').textContent = commission;

        document.getElementById('Mpayment-form').style.display = 'none';
        document.getElementById('confirmation-form5').style.display = 'block';
    }
}

function submitMoMoPaymentForm() {
    const form = document.getElementById('momoPaymentForm');
    const formData = {
        MoMo: form.MoMo.value,
        description: form.description.value,
        momonumber: form.momonumber.value,
        Bname: form.Bname.value,
        amount: form.amount.value,
        Commission: form.Commission.value
    };
    
    document.getElementById('confirmation-form5').style.display = 'none';
    document.getElementById('successful-sms').style.display = 'none'; 
    document.getElementById('failure-sms').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 1300);

    fetch('/Usermpayment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('loading').style.display = 'none';
        if (data.success) {
            document.getElementById('loading').style.display = 'block';
            setTimeout(() => {
                document.getElementById('successful-sms').style.display = 'block';
            }, 1300);
            setTimeout(() => {
                window.location.href = '/user'; 
            }, 3000);
        } else {
            document.getElementById('failure-sms').style.display = 'block';
            setTimeout(() => {
                document.getElementById('failure-sms').style.display = 'none';
            }, 5000);
            document.getElementById('loading').style.display = 'none';
            setTimeout(() => {
                document.getElementById('confirmation-form5').style.display = 'block';
            },  5000);
        }       
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('failure-sms').style.display = 'block';
        setTimeout(() => {
            document.getElementById('failure-sms').style.display = 'none';
        }, 5000);
        document.getElementById('loading').style.display = 'none';
        setTimeout(() => {
            document.getElementById('confirmation-form5').style.display = 'block';
        },  5000);
    });
}

function Back5() {
    document.getElementById('confirmation-form5').style.display = "none";
    document.getElementById('Mpayment-form').style.display = "block";
}

function hideForm() {

    document.getElementById('overlay').style.display = 'none';

    var forms = document.querySelectorAll('.popup-form');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });
}



  


  