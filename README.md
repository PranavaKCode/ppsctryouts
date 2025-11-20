https://pranavakcode.github.io/ppsctryouts/
---

## Browser-Based Testing Platform with Anti-Cheat

A lightweight, single page testing platform with built in anti cheat monitoring, section based problems, and a clean student friendly interface. It is designed for online assessments such as tryouts, practice tests, or contests and can be hosted easily on GitHub Pages.

###  Overview

This project provides:

* A structured environment for tests with multiple sections
* Anti cheat logging that tracks tab and window focus
* Inline hints that students can reveal only when needed
* A password gate so the full test is not visible before the start time
* Simple serverless submission using Formspree

---

###  Features

* **Sectioned assessments**

  * Core section for required problems
  * Optional challenge section for higher level questions
* **Inline hints**
  Collapsible “Show Hint” boxes for each problem so students can get guidance without seeing solutions.
* **Anti cheat system**

  * Uses browser events (`visibilitychange`, `blur`, `focus`) to detect when the user leaves the page
  * Logs each event with a timestamp and elapsed time since the start
  * Tracks total number of tab or window switches
  * Accumulates total time spent away from the test
  * Includes this metadata with the submission for later review
* **Access gate screen**

  * Intro page that explains sections, rules, hint behavior, and expected duration
  * Password entry required before the test is revealed
  * Prevents problems from being visible before the official start
* **Math friendly rendering**

  * Uses MathJax to render LaTeX style equations for physics or math questions
* **Formspree integration**

  * Sends answers, reasoning, and anti cheat logs to a Formspree endpoint
  * No custom backend needed
* **Clean UI**

  * Centered container with clear typography
  * Color coded sections
  * Top focus bar that changes color when the user leaves the page

---

###  Tech Stack

* HTML, CSS, and vanilla JavaScript
* MathJax for equation rendering
* Formspree for form handling
* GitHub Pages for static hosting

---

###  Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```
2. Open `index.html` in a browser to test locally.
3. Replace the Formspree endpoint in the `<form>` tag with your own if needed.
4. Enable GitHub Pages on the repository and point it to the branch containing `index.html`.
5. Share the GitHub Pages URL and the access password with test takers.

---

###  Customization

* **Change the questions** by editing the problem text, hints, and input field names in the HTML.
* **Adjust the structure** by adding or removing sections or problems.
* **Modify the password and intro content** in the gate screen logic.
* **Tune anti cheat rules** by changing which events are logged or how strict the warnings are.

---

###  Possible Extensions

* Add a visible timer and send start and submit times in the form.
* Add simple auto grading for numeric or multiple choice questions.
* Export submissions to CSV or integrate with a custom backend or spreadsheet.

If you want, I can also write a one line short description for the GitHub repo tagline.
