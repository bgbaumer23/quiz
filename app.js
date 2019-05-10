function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Rick Elliot, a salesperson for Revelation Real Estate, sold a house in Gilbert. The commission structure was as follows: Rick received 6% of the first $50,000 and 4% on any amount over $50,000. What did the house sell for if Rick received a total commission of $8,000?", ["$175,000", "$250,000","$75,000", "$110,000"], "$175,000"),
    new Question("An owner lists a lot for sale and wants to net $95,000 after paying the broker a 7% commission. What should the owner sell the house for to receive the desired net amount?", ["$250,000", "$102,000", "$325,000", "$400,000"], "$102,000"),
    new Question("Betty Haver paid $145,000 for her home and now wants to sell it and make a 25% profit <strong>after</strong> paying her broker a 6% commission. What should Betty sell their hosue for?", ["$225,000", "$335,000","$192,819", "$226,382"], "$192,819"),
    new Question("Michelle sells a parcel of land for $85,400. If Michelle netted $78,460 after paying a broker's commission, what was the state of commission paid?", ["3%", "6%", "12%", "8%"], "8%"),
    new Question("If the upaid mortgage balance is $30,000 at 8% interest, what is 1/2 month's interest amount?", ["$100", "$50", "$250", "$99"], "$100"),
    new Question("Robbie and Mary James have purchased a home for $295,000. They put down $3,000 in earnest money and have a loan commitment of 80%. What is the cash balance needed to complete the transaction?", ["$36,000", "$25,000", "$56,000", "$19,000"], "$56,000"),
    new Question("If the unpaid mortgage balance is $30,000 at 8% interest, what is 1/2 mnth's interest amount?", ["$200", "$150", "$50", "$100"], "$100"),
    new Question("The quarterly interest payment on a loan is $784.50 at 6.5% annual interest. What is the principal amount?", ["$32,444", "$48,276.92", "$19,333.35", "$22,445.13"], "$48,276.92"),
    new Question("Sue Lloyd took a loan from Citywide Bank in the amount of $65,000 at 7% interest and repaid the loan in 6 months. What was the total amount paid?", ["$48,722.36", "$47,263.36", "$62,275.00", "$36,000.00"], "$62,275.00"),
    new Question("Kevin Ortiz borrowed $18,500 at 4% interst to remodel his sporting goods store. Kevin repaid the P&I in one payment at the end of 9 months. What was the amount of the total payment?", ["$18,865", "$19,055", "$21,222", "$19,888"], "$19,055"),
    new Question("An owner lists a lot for sale and wnts to net $95,000 after paying the broker a 7% commission. What should the woner sell the house for to receive the desired net amount?", ["$104,250", "$102,150", "$95,132", "$104,500"], "$102,150"),
    new Question("Joylen & Marty receive a loan from Academy Mortgage in the amount of $289,000 and are putting down $42,000 as a down payment. They are paying 2 discount points and the loan origination fee is 1%. Their conventional loan also requires them to pay 0.782 points for private mortgage insurance. How much will Joylen & Marty have to bring to the closing table?", ["$48,336.23", "$42,333.26", "$52,929.98", "$51,337.23"], "$52,929.98"),
    new Question("Two brokers agreed to split evenly a 6% commission on a property that sold for $295,000. The listing salesperson will receive 50% of his broker's commission. How much is the salesperson's commission?", ["$6,250", "$4,425", "$3,750", "$2,750"], "$4,425"),
    new Question("A seller wants to net $150,000 after paying a broker commission of 6%, a 2% buyer contribution, a $300 roof repair, and a $175,000 first deed of trust must be paid in full. What should the seller sell the house for?", ["$325,497", "$353,587", "$295,300", "$192,000"], "$353,587"),
    new Question("The buyers hae obtained an FHA loan at $5.25% interest. The monthly payment on this loan is $1,248. What is the principal amount on this loan?", ["$265,000", "$311,285", "$285,257", "$192,333"], "$285,257")
  ];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
