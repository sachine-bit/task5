const exams = [
    { subject: "JAVA", date: "2026-10-25" },
    { subject: "HTML", date: "2026-10-29" },
    { subject: "CSS", date: "2026-11-8" },
    { subject: "JAVASCRIPT", date: "2026-11-11" }
];

const today = new Date();
today.setHours(0, 0, 0, 0);

const examDetails = exams.map(exam => {
    const examDate = new Date(exam.date);
    examDate.setHours(0,0,0,0);
    const difference = examDate - today;
    const remainingDays = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    return {
        subject: exam.subject,
        date: exam.date,
        remainingDays: remainingDays
    };
});

console.log("EXAM COUNTDOWN");
examDetails.forEach(exam => {
  if (exam.remainingDays < 0) {
    let daysAgo = Math.abs(exam.remainingDays);
    console.log(`${exam.subject} - Completed, ${daysAgo} day${daysAgo > 1 ? 's' : ''} ago completed`);
  } else if (exam.remainingDays === 0) {
    console.log(`${exam.subject} - Today is exam!`);
  } else {
    console.log(`${exam.subject} - ${exam.remainingDays} days remaining`);
  }
});

const upcomingExams = examDetails.filter(
    exam => exam.remainingDays >= 0
);

console.log("\nUPCOMING EXAMS");
console.table(upcomingExams);

const nextExam = upcomingExams.reduce(
    (earliest, exam) =>
        exam.remainingDays < earliest.remainingDays
            ? exam
            : earliest
);

console.log("\nNEXT EXAM");
console.table(nextExam);
if(upcomingExams.length > 0){
  console.log("\nNEXT EXAM", upcomingExams[0]);
}


    

    



