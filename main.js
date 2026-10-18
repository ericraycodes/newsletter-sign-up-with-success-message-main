/**
 * SIGN-UP LOGIC
 *
 * Capture the form's 'onSubmit' user-event.
 * Collect the form data.
 * Validate the data.
 * Render indicators when user-input is invalid
 *  or show the success message when user-input is valid.
 * Return the user to the signup-form when success message is dismissed.
 */

// debug script
// console.log("DOM:", Boolean(document.querySelector("body")));

// reference
const banner = document.getElementById("banner");
const signUpForm = document.getElementById("signup-form");
const userInputSection = document.getElementById("user-input-section");
const userEmailInput = document.getElementById("user-email-input");
const submitButton = document.getElementById("submit-button");
const successMessage = document.getElementById("success-message");
const signedUpUserEmail = document.getElementById("signed-up-user-email");
const dismissButton = document.getElementById("dismiss-button");

// email address validation
const validateEmailInput = (data) => {
  /** TEST #1
   *
   * General parts of an email
   *
   * The username does not start nor end with whitespace or a period.
   * The '@' character is used once to separate username from the domain name.
   * The server name starts and ends with alphanumeric characters that can have '.' and/or '.' in between.
   * The top-level domain separates itself with a '.' with a range of 2-63 alphanumeric characters.
   */
  const test1Rgx = /^[^\s.@][^@\s]+[^@\s.]@[a-zA-Z0-9][-.a-zA-Z0-9]*[a-zA-Z0-9].[a-zA-Z0-9]{2,63}$/;
  const test1 = test1Rgx.test(data);
  // return email as invalid when the test fails
  if (!test1) return false;

  /** TEST #2
   * Special symbols in username
   *
   * The username cannot have similar special symbols
   * next to each other.
   */
  // extract the series of symbols inside username and domain
  const adjacentSymbols = data.match(/[^a-zA-Z0-9]+/g);
  // test when there are symbols inputted
  if (adjacentSymbols) {
    // test if at least two similar symbols are next to each other
    const test2 = adjacentSymbols.reduce(
      (isThereInAllSymbolGroups, symbolGroup) => {
        console.log("symbolGroup:", symbolGroup);
        const isThereInThisSymbolGroup = symbolGroup
          .split("")
          .reduce(
            (isThereAdajacentSimilarSymbol, symbol, i, symbolGroupArray) => {
              const areThisTwoSymbolsSimilar =
                symbol === symbolGroupArray[i + 1];
              return isThereAdajacentSimilarSymbol || areThisTwoSymbolsSimilar;
            },
            false
          );
        return isThereInAllSymbolGroups || isThereInThisSymbolGroup;
      },
      false
    );
    // return email as invalid when there is at least two similar symbols adjacent to each other
    if (test2) return false;
  }

  /** TEST #3
   * The top-level domain cannot be all numeric characters.
   */
  const topLevelDomain = data.match(/\.[a-zA-Z0-9]+$/);
  const test3 = /^\.[0-9]+$/.test(topLevelDomain);
  // email is invalid when top level domain is all numeric characters
  if (test3) return false;

  // email is valid when it passed every single test
  return true;
};
// when user edits invalid input
const handleInputChange = (event) => {
  // listener removed, used once on first edit of invalid email input
  userEmailInput.removeEventListener("input", handleInputChange);
  // since validation is done on next submit, error indicator is removed when input is edited
  userInputSection.classList.remove("invalid-user-input");
};
// handle button key down
const handleButtonKeyDown = (event) => {
  if (event.key === "Enter" || event.key === " ") {
    // add style on keydown
    event.target.classList.add("button-keydown");
  }
};
// handle button key up
const handleButtonKeyUp = (event) => {
  if (event.key === "Enter" || event.key === " ") {
    // remove style on keyup
    event.target.classList.remove("button-keydown");
  }
};
// dismiss success message
const dismissMessageViaPointer = () => {
  // refresh the page, fresh signup form
  location.reload();
};
const dismissMessageViaKey = (event) => {
  if (event.key === "Enter" || event.key === " ") {
    // refresh the page, fresh signup form
    location.reload();
  }
};

// WHEN FORM IS SUBMITTED
const handleSignUpFormSubmit = (event) => {
  // remove native page reload
  event.preventDefault();

  // COLLECT FORM DATA
  const data = event.target.querySelector("#user-email-input").value;
  console.log("USER INPUT:", '"' + data + '"');

  // VALIDATE DATA
  const isEmailValid = validateEmailInput(data);
  console.log("is email valid:", isEmailValid);

  // RENDER INVALID USER-INPUT INDICATOR
  // when user-email is valid
  if (isEmailValid) {
    // reflect the newly signed-up email
    signedUpUserEmail.textContent = data;
    // show success message
    banner.classList.add("no-display");
    signUpForm.classList.add("no-display");
    successMessage.classList.remove("no-display");
    // listen for user to dismiss success message
    dismissButton.addEventListener("pointerup", dismissMessageViaPointer);
    dismissButton.addEventListener("keyup", dismissMessageViaKey);
  }
  // when user-email is invalid
  else if (!isEmailValid) {
    // render invalid input indicator
    userInputSection.classList.add("invalid-user-input");
    // listen for any user edit of invalid email input
    userEmailInput.addEventListener("input", handleInputChange);
  }
};
signUpForm.addEventListener("submit", handleSignUpFormSubmit);

// Styling purposes only.
// Mimic the 'button:active' pseudoclass style.
// For browsers that does not respond to Enter and Spacebar key events with CSS ':active' pseudoclass.
submitButton.addEventListener("keydown", handleButtonKeyDown);
dismissButton.addEventListener("keydown", handleButtonKeyDown);
submitButton.addEventListener("keyup", handleButtonKeyUp);
dismissButton.addEventListener("keyup", handleButtonKeyUp);
