# Aurazone Automation Testing

Automated end-to-end test suite for the **Aurazone** e-commerce site, built with [Playwright](https://playwright.dev/). The suite covers 8 key user journeys:

1. Registration
2. Login
3. Search
4. Product Details
5. Add to Cart
6. Update Cart
7. Checkout
8. Logout

---

## 📁 Project Structure

```
Aurazone-Automation-Testing/
├── .github/workflows/       # CI workflow(s) for running tests automatically
├── tests/
│   └── demo/
│       ├── registration.spec.js
│       ├── login.spec.js
│       ├── search.spec.js
│       ├── productdetails.spec.js
│       ├── addcart.spec.js
│       ├── updatecart.spec.js
│       ├── checkout.spec.js
│       └── logout.spec.js
├── playwright.config.js     # Playwright configuration (browsers, base URL, reporters, etc.)
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ✅ Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later recommended) and npm
- [Git](https://git-scm.com/)

Check your versions:

```bash
node -v
npm -v
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Ismail750k/Aurazone-Automation-Testing.git
cd Aurazone-Automation-Testing
```

### 2. Install project dependencies

```bash
npm install
```

### 3. Install Playwright browsers

This downloads the Chromium, Firefox, and WebKit browser binaries that Playwright needs to run tests.

```bash
npx playwright install
```

> Optional: install browsers along with their OS-level dependencies (useful on a fresh Linux machine/CI runner):
> ```bash
> npx playwright install --with-deps
> ```

---

## ▶️ Running the Tests

### Run the entire test suite

```bash
npx playwright test
```

### Run the entire suite in headed mode (see the browser)

```bash
npx playwright test --headed
```

### Run a specific browser project

```bash
npx playwright test --project chromium
```

### Run an individual test file

Each user journey has its own spec file under `tests/demo/`. Run them individually like so:

```bash
# Login
npx playwright test tests/demo/login.spec.js --project chromium --headed

# Registration
npx playwright test tests/demo/registration.spec.js --project chromium --headed

# Search
npx playwright test tests/demo/search.spec.js --project chromium --headed

# Product Details
npx playwright test tests/demo/productdetails.spec.js --project chromium --headed

# Add to Cart
npx playwright test tests/demo/addcart.spec.js --project chromium --headed

# Update Cart
npx playwright test tests/demo/updatecart.spec.js --project chromium --headed

# Checkout
npx playwright test tests/demo/checkout.spec.js --project chromium --headed

# Logout
npx playwright test tests/demo/logout.spec.js --project chromium --headed
```

### Run tests matching a name/title

```bash
npx playwright test -g "add to cart"
```

### Run tests in debug mode

```bash
npx playwright test tests/demo/login.spec.js --debug
```

### Open the Playwright UI mode (interactive test runner)

```bash
npx playwright test --ui
```

---

## 📊 Viewing the Test Report

After a run completes, Playwright generates an HTML report. Open it with:

```bash
npx playwright show-report
```

---

## 🧩 Configuration

Key settings such as the base URL, timeouts, browser projects, and reporters are defined in `playwright.config.js`. Update this file if the target environment (staging/production URL) changes.

---

## 🔄 Continuous Integration

This repository includes a GitHub Actions workflow under `.github/workflows/` that installs dependencies, installs Playwright browsers, and runs the test suite automatically (e.g., on push/pull request). Check the workflow file for the exact trigger conditions.

---

## 🛠️ Troubleshooting

| Issue | Fix |
|---|---|
| `browserType.launch: Executable doesn't exist` | Run `npx playwright install` |
| Missing system dependencies (Linux) | Run `npx playwright install --with-deps` |
| Tests time out waiting for elements | Check the base URL/selectors in `playwright.config.js` and the relevant spec file — the site markup may have changed |
| `npm install` fails | Confirm Node.js/npm versions meet the prerequisites above |

---

## 📄 License

No license specified. Add a `LICENSE` file if you intend to open-source this project under a specific license.
