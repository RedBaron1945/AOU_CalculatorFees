const subjects = document.getElementById("subjects");
const VATbox = document.getElementById("VATbox");
const TheFirstLabel = document.getElementById("The first label");
const Thetotal = document.getElementById("TheTotal");
const TheSecondLabel = document.getElementById("The second label");
const CalculatingTotal = document.getElementById("CalculatingTotal");
const DeletingBut = document.getElementById("DeletingBut");
//===========================================================================

const ExtraFees = 1145;
const coursesFees = {
    //English heavy courses:
    EL097: 2600 + 281,
    EL098: 2600 + 281,
    EL099: 2600 + 281,
    //General subjects:
    AR111: 687 + 146.5,
    AR112: 687 + 146.5,
    TU170: 687 + 281,
    EL111: 687 + 304,
    EL112: 687 + 304,
    GR101: 687 + 146.5, //unsure about the book price 
    TU170: 687 + 281,   //unsure about the book price 

    //Electives (Note: the book prices aren't accurate 100%):
    GR111: 687 + 146.5,
    GR112: 687 + 146.5,
    GR118: 687 + 146.5,
    FR101: 867 + 274,

    //The Math Subjects:
    MT101: 936 + 150,
    MT129: 1248 + 282,
    MT131: 1248 + 270,
    MT132: 1248 + 270,

    //8 Credits subjects:
    TM111: 2496 + 144.70,
    TM112: 2496 + 144.70,
    M251:  2496 + 533,
    M269:  2496 + 214,
    T215A: 2496 + 240, //215 sisters books need to be checked out
    T215B: 2496 + 0, 
    T227:  2496 + 146.5,
    TM351: 2496 + 144.70,
    TM354: 2496 + 144.70,
    TM355: 2496 + 144.70, //unsure about book price
    TM366: 2496 + 221.25,  //unsure about book price
    TM352: 2496 + 144.70,
    TM356: 2496 + 0,
    T216A: 2496 + 240,
    T216B: 2496 + 0,
    T316: 2496  + 270,
    T318: 2496 + 270,

//4 Credits subjects:
    TM105: 1248 + 533,
    TM103: 1248 + 270,
    M109: 936 + 169,
    TM298: 1248 + 142.50, //From here to the bottom, books prices need to be checked up
    TM240: 1248 + 146,
    CAS400: 1248 + 0, 
    TM471A:1248 + 300,
    TM471B:1248+ 0,
    
}





CalculatingTotal.onclick = function() {
    let sum = ExtraFees;
    let inputString = subjects.value.trim();
    if (inputString === "") {
        Thetotal.textContent = `!لا توجد مواد ليتم حسابها من الأساس، الرجاء إدخال رموز المواد في المربع`;
        return;
    }
    inputString = inputString.toUpperCase();
    const arrado = inputString.split('-').map(code => code.trim());

    for (let i = 0; i < arrado.length; i++) {
        if (coursesFees[arrado[i]] !== undefined) {
            sum += coursesFees[arrado[i]];
        } else {
            Thetotal.textContent = `تأكد من إدخال رمز مادة صحيح أو ربما أن ${arrado[i]} ليس في سجلاتنا!`;
            return;
        }
    }

    if (VATbox.checked) {
        sum = sum * 1.15;
        Thetotal.textContent = `الرسوم للمواد التالية ${arrado.join(', ')} تساوي ${sum.toFixed(2)} ريال شاملة لضريبة القيمة المضافة`; 
        return;
   
    }

    Thetotal.textContent = `الرسوم للمواد التالية ${arrado.join(', ')} تساوي ${sum.toFixed(2)} ريال`;
    
};

DeletingBut.onclick= function() {
    subjects.value = '';
}

//end of calculating subjects fees segment of code..

//Start of the function that will be used to the menu in the majors plans.

function HitzerTank(x) {
    const daPlanPhoto = document.getElementById("daPlanPhoto");
    const ThePriceDetailes = document.getElementById("ThePriceDetailes");
const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const stPlan = document.getElementById("1stPlan");
const secondPlan = document.getElementById("2sPlan");

switch (x){

    case 1: 
document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
stPlan.textContent = `
- الخطة الدراسية المقترحة لكل ترم إلى التخرج

`
secondPlan.textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
//يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
a1.href = "https://www.arabou.edu.sa/admission/Documents/Advising%20Plan%20-%20Information%20Technology%20%26%20Computing%20Track.pdf";
a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
a2.href= "https://www.arabou.edu.sa/admission/Documents/BSc%20Information%20Technology%20Computing.pdf";
a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"
    break;

    case 2:
        document.getElementById("PlanTitle").textContent = "**خطة تخصص علوم الحاسب**"
        document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
        //يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
        a1.href = "https://www.arabou.edu.sa/admission/Documents/Advising%20Plan%20-%20Computer%20Science%20Track.pdf";
        a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
        a2.href= "https://www.arabou.edu.sa/admission/Documents/BSc%20Information%20Technology%20Computing%20Computer%20Science.pdf";
        a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"

        break;

    case 3:
       document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
//يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
a1.href = " ";
a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
a2.href= "  ";
a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"

    break;

    case 4:
        document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
//يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
a1.href = " ";
a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
a2.href= "  ";
a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"
        break;
    case 5:
        document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
//يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
a1.href = " ";
a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
a2.href= "  ";
a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"
    break;

    case 6:
        document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
        document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
        //يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
        a1.href = " ";
        a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
        a2.href= "  ";
        a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"
    break;

    case 7:
        document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
//يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
a1.href = " ";
a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
a2.href= "  ";
a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"
    break;

    case 8:
        document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
//يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
a1.href = " ";
a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
a2.href= "  ";
a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"
    break;

    case 9:
        document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
//يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
a1.href = " ";
a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
a2.href= "  ";
a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"
        break;
    case 10:
        document.getElementById("PlanTitle").textContent = "**خطة تخصص تقنية المعلومات و الحوسبة**"
document.getElementById("2sPlan").textContent = "شرح معنى الخطة التفصيلية سيكون هنا"
//يجب إضافة مربع، لسؤال المستخدم عمّا إذا يرغب بأن يتم حساب الرسوم له بالضريبة أو بدون
a1.href = " ";
a1.textContent ="للوصول إلى الخطة المقترحة الخاصة بالـ 4 سنين أضغط هنا";
a2.href= "  ";
a2.textContent = "للوصول إلى الخطة التفصيلية للمواد أضغط هنا"
    break;

    
}

}

