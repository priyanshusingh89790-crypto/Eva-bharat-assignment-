#  GitHub Explorer

A React.js application that allows users to search GitHub profiles and explore their repositories with sorting and filtering features.

---

## Live Demo
https://hilarious-faun-5d026a.netlify.app/

## Features

* Search GitHub users
* Debounced API calls (optimized performance)
* View user profile (avatar + username)
* Explore repositories
* Sort repositories by stars
* Sort repositories by forks
* Filter repositories by language
* Dark mode support
* Responsive design

---

## 🛠 Tech Stack

* React.js (Functional Components)
* Hooks (useState, useEffect, useMemo)
* Axios (API calls)
* Tailwind CSS (UI styling)

---

## API Used

* GitHub Search Users
  https://api.github.com/search/users?q={query}

* GitHub User Repositories
  https://api.github.com/users/{username}/repos

---

## Installation & Setup

1. Clone the repository

```bash
git https://github.com/priyanshusingh89790-crypto/Eva-bharat-assignment-
cd github-explorer
```

2. Install dependencies

```bash
npm install
```

3. Run the project

```bash
npm run dev
```

---

## Project Structure

```
src/
 ├── components/
 │    ├── Header.jsx
 │    ├── Profile.jsx
 │    ├── Repocard.jsx
 │
 ├── hooks/
 │    ├── useDebounce.js
 │    ├── useGithubusers.js
 │    ├── useUserrepo.js
 │
 ├── App.jsx
```

---

## Key Concepts Implemented

* Debouncing for optimized API calls
* State lifting and prop drilling
* Separation of concerns (UI vs logic)
* Reusable components
* Conditional rendering (loading, error, empty states)

---

## Author

Priyanshu Singh

---
