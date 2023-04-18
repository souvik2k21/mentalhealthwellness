function getResults() {
  // Get the user's answers to the six questions
  const response1 = document.getElementById("response1").value;
  const response2 = document.getElementById("response2").value;
  const response3 = document.getElementById("response3").value;
  const response4 = document.getElementById("response4").value;
  const response5 = document.getElementById("response5").value;
  const response6 = document.getElementById("response6").value;

  // Calculate a score based on the answers
  let score = 0;

  if (response1 === "Good") {
    score += 1;
  } else if (response1 === "Okay") {
    score += 0.5;
  } else if (response1 == "Bad") {
    score += 0.2;
  }

  if (response2 === "Yes") {
    score += 1;
  } else if (response2 === "Not sure") {
    score += 0.5;
  } else if (response2 === "No") {
    score += 0;
  }

  if (response3 === "High") {
    score += 1;
  } else if (response3 === "Medium") {
    score += 0.5;
  } else if (response3 === "Low") {
    score += 0;
  }

  if (response4 === "No") {
    score += 1;
  } else if (response4 === "Not sure") {
    score += 0.5;
  } else if (response4 === "Yes") {
    score += 0;
  }

  if (response5 === "Yes") {
    score += 1;
  } else if (response5 === "Not sure") {
    score += 0.5;
  } else if (response5 === "No") {
    score += 0;
  }

  if (response6 === "Yes") {
    score += 1;
  } else if (response6 === "Not sure") {
    score += 0.5;
  } else if (response6 === "No") {
    score += 0;
  }

  // Determine the result based on the score
  let result = "";

  if (score >= 4.5) {
    result =
      "Your mental health seems to be in a good place. Keep up the good work!";
  } else if (score >= 3) {
    result =
      "Your mental health could be better. Consider talking to someone about how you're feeling.";
  } else {
    result =
      "Your mental health may be at risk. Please reach out to a mental health professional or a trusted friend or family member for help.";
  }

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
}
