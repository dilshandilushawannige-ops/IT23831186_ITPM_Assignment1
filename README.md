## Installation and Running Tests

### Prerequisites
- Node.js (v16 or later)
- npm
- Git
- A modern web browser (Chrome / Edge)

### Install Dependencies
1. Clone the repository:
git clone https://github.com/dilshandilushawannige-ops/IT23831186_ITPM_Assignment1.git

2. Navigate to the project folder:
cd IT23831186_ITPM_Assignment1

3. Install dependencies:
npm install

4. Install Playwright browsers:
npx playwright install

### Run Tests

All test files are separated based on test type:
- positive.spec.js – Positive functional test cases
- negative.spec.js – Negative functional test cases
- ui.spec.js – UI-related test cases

Running `npx playwright test --project=chromium` will execute all test files.


### View Test Report
To open the Playwright HTML report:
npx playwright show-report
