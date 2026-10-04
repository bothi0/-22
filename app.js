document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

        });

    }



    /* =========================
       CHAT
    ========================= */

    const chatForm = document.getElementById("chatForm");
    const messages = document.getElementById("messages");
    const chatInput = document.getElementById("chatMessage");

    if (chatForm && messages && chatInput) {

        chatForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const message = chatInput.value.trim();

            if (!message) return;


            addMessage(message, "user-message");

            chatInput.value = "";


            setTimeout(() => {

                const reply = getAutomaticReply(message);

                addMessage(reply, "bot-message");

            }, 700);

        });

    }



    function addMessage(text, className) {

        const messageElement = document.createElement("div");

        messageElement.className =
            `message ${className}`;

        messageElement.textContent = text;

        messages.appendChild(messageElement);

        messages.scrollTop =
            messages.scrollHeight;

    }



    function getAutomaticReply(message) {

        const text = message.toLowerCase();


        if (
            text.includes("وجبة") ||
            text.includes("اكل") ||
            text.includes("غداء") ||
            text.includes("عشاء")
        ) {

            return "أكيد 🌿 مواعيد الوجبات: الإفطار 7:00 ص، الغداء 1:00 م، والعشاء 8:00 م.";

        }


        if (
            text.includes("طبيب") ||
            text.includes("طبي") ||
            text.includes("مريض")
        ) {

            return "يمكنك التواصل مع الفريق الطبي من خلال خدمة الرعاية الطبية في صفحة الخدمات 🩺.";

        }


        if (
            text.includes("مشرف")
        ) {

            return "مشرفك الحالي هو عبدالرحمن الحربي، ويمكنك التواصل معه من خلال خدمة الاتصال بالمشرف 📞.";

        }


        if (
            text.includes("شنطة") ||
            text.includes("حقيبة") ||
            text.includes("مفقود")
        ) {

            return "تقدرين تسجيل بلاغ للأمتعة المفقودة من صفحة الخدمات 🧳.";

        }


        if (
            text.includes("ثقافي") ||
            text.includes("مسابقة")
        ) {

            return "المسابقة الثقافية موجودة في القسم الثقافي والترفيهي 🎭 ويمكنك بعد المشاركة الدخول في السحب.";

        }


        return "يسعدني مساعدتك 🌿 جربي السؤال عن الوجبات أو المشرف أو الرعاية الطبية أو الأمتعة المفقودة.";

    }



    /* =========================
       QUIZ
    ========================= */

    const quizForm =
        document.getElementById("quizForm");

    if (quizForm) {

        quizForm.addEventListener("submit", (event) => {

            event.preventDefault();


            const correctAnswers = [
                "b",
                "a",
                "b"
            ];


            let score = 0;


            correctAnswers.forEach(
                (correctAnswer, index) => {

                    const selected =
                        quizForm.querySelector(
                            `input[name="q${index + 1}"]:checked`
                        );


                    if (
                        selected &&
                        selected.value === correctAnswer
                    ) {

                        score++;

                    }

                }
            );


            const result =
                document.getElementById("quizResult");


            result.innerHTML = `

                <div class="result-success">

                    <strong>
                        نتيجتك ${score} من ${correctAnswers.length}
                    </strong>

                    <p>
                        ${
                            score === correctAnswers.length
                            ? "ما شاء الله! جميع إجاباتك صحيحة 🎉"
                            : "تم تصحيح إجاباتك تلقائيًا، حاولي مرة أخرى للوصول للنتيجة الكاملة."
                        }
                    </p>

                </div>

            `;

        });

    }



    /* =========================
       LOTTERY
    ========================= */

    const drawButton =
        document.getElementById("drawBtn");

    if (drawButton) {

        drawButton.addEventListener("click", () => {

            drawButton.disabled = true;

            drawButton.textContent =
                "جاري السحب...";


            let count = 0;

            const animation =
                setInterval(() => {

                    const number =
                        Math.floor(
                            Math.random() * 900
                        ) + 100;

                    document.getElementById(
                        "drawNumber"
                    ).textContent = number;


                    count++;


                    if (count >= 20) {

                        clearInterval(animation);

                        const finalNumber =
                            Math.floor(
                                Math.random() * 900
                            ) + 100;


                        document.getElementById(
                            "drawNumber"
                        ).textContent =
                            finalNumber;


                        document.getElementById(
                            "winnerName"
                        ).textContent =
                            `الحاج رقم ${finalNumber} هو الفائز في السحب.`;


                        document.getElementById(
                            "winnerMessage"
                        ).classList.add(
                            "show-winner"
                        );


                        drawButton.textContent =
                            "تم السحب ✓";

                    }

                }, 100);

        });

    }



    /* =========================
       PROFILE
    ========================= */

    const profileForm =
        document.getElementById("profileForm");


    if (profileForm) {

        profileForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                showMessage(
                    "تم حفظ بيانات الملف الشخصي بنجاح ✓"
                );

            }
        );

    }



    /* =========================
       LOGIN
    ========================= */

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const id =
                    document.getElementById(
                        "loginId"
                    ).value.trim();


                const password =
                    document.getElementById(
                        "loginPassword"
                    ).value.trim();


                if (!id || !password) {

                    alert(
                        "فضلاً أدخل بيانات تسجيل الدخول."
                    );

                    return;

                }


                sessionStorage.setItem(
                    "loggedIn",
                    "true"
                );


                window.location.href =
                    "index.html";

            }
        );

    }



    /* =========================
       EXPENSES
    ========================= */

    const expenseForm =
        document.getElementById(
            "expenseForm"
        );


    if (expenseForm) {

        expenseForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const description =
                    document.getElementById(
                        "expenseDescription"
                    ).value;


                const amount =
                    Number(
                        document.getElementById(
                            "expenseAmount"
                        ).value
                    );


                const category =
                    document.getElementById(
                        "expenseCategory"
                    ).value;


                const receipt =
                    document.getElementById(
                        "receipt"
                    ).files[0];


                addExpense(
                    description,
                    amount,
                    category,
                    receipt
                );


                closeExpenseModal();


                expenseForm.reset();


                showMessage(
                    "تم تسجيل القيد بنجاح ✓"
                );

            }
        );

    }


    loadExpenses();

});



/* =========================
   EXPENSE MODAL
========================= */

function openExpenseModal() {

    const modal =
        document.getElementById(
            "expenseModal"
        );

    if (modal) {

        modal.classList.add("show");

    }

}



function closeExpenseModal() {

    const modal =
        document.getElementById(
            "expenseModal"
        );

    if (modal) {

        modal.classList.remove("show");

    }

}



/* =========================
   LOST BAG
========================= */

function openLostModal() {

    const modal =
        document.getElementById(
            "lostModal"
        );

    if (modal) {

        modal.classList.add("show");

    }

}



function closeLostModal() {

    const modal =
        document.getElementById(
            "lostModal"
        );

    if (modal) {

        modal.classList.remove("show");

    }

}



/* =========================
   MESSAGE
========================= */

function showMessage(message) {

    const oldToast =
        document.querySelector(
            ".toast-message"
        );


    if (oldToast) {

        oldToast.remove();

    }


    const toast =
        document.createElement(
            "div"
        );


    toast.className =
        "toast-message";


    toast.textContent =
        message;


    document.body.appendChild(
        toast
    );


    setTimeout(() => {

        toast.classList.add(
            "toast-show"
        );

    }, 50);


    setTimeout(() => {

        toast.classList.remove(
            "toast-show"
        );


        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}



/* =========================
   EXPENSE STORAGE
========================= */

function getExpenses() {

    return JSON.parse(
        localStorage.getItem(
            "campaignExpenses"
        ) || "[]"
    );

}



function addExpense(
    description,
    amount,
    category,
    receipt
) {

    const expenses =
        getExpenses();


    expenses.push({

        description,

        amount,

        category,

        date:
            new Date()
            .toLocaleDateString(
                "ar-SA"
            ),

        receipt:
            receipt
            ? receipt.name
            : "لم يتم إرفاق فاتورة"

    });


    localStorage.setItem(
        "campaignExpenses",
        JSON.stringify(expenses)
    );


    loadExpenses();

}



function loadExpenses() {

    const table =
        document.getElementById(
            "expensesTable"
        );


    if (!table) return;


    const expenses =
        getExpenses();


    table.innerHTML = "";


    let total = 0;


    expenses.forEach(
        (expense, index) => {

            total +=
                Number(
                    expense.amount
                );


            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>
                    ${index + 1}
                </td>

                <td>
                    ${expense.description}
                </td>

                <td>
                    ${expense.amount} ر.س
                </td>

                <td>
                    ${expense.category}
                </td>

                <td>
                    ${expense.date}
                </td>

                <td>
                    📎 ${expense.receipt}
                </td>

                <td>
                    <span class="table-status">
                        مرحّل
                    </span>
                </td>

            `;


            table.appendChild(
                row
            );

        }
    );


    const count =
        document.getElementById(
            "expenseCount"
        );


    const totalElement =
        document.getElementById(
            "expenseTotal"
        );


    if (count) {

        count.textContent =
            expenses.length;

    }


    if (totalElement) {

        totalElement.textContent =
            `${total.toLocaleString()} ر.س`;

    }

}