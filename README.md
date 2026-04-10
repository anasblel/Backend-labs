# 🚀 Node.js Lab 1: Learning to Multi-task

Imagine a busy restaurant. If the waiter stood still and waited for every steak to cook before talking to the next customer, the restaurant would fail. **Node.js is like a smart manager** who keeps things moving while the food cooks in the background.

This lab shows you how to write code that doesn't "wait" and waste time.

---

## 👨‍🍳 The "Restaurant" Analogy
To understand this lab, remember these three roles:
*   **Synchronous Code:** Customers waiting in a line.
*   **Asynchronous Code:** Food cooking in the kitchen (happens in the background).
*   **The Event Loop:** The Manager who checks if the food is ready and delivers it.

---

## 📂 What we did in each part

### 1. The Traffic Controller (`Lab1_EventLoop.js`)
*   **The Simple Idea:** Some things in code happen immediately, others take a "waiting period."
*   **What we learned:** Even if you say "wait 0 seconds" (`setTimeout`), Node still finishes immediate tasks first.
*   **The Lesson:** Real work (Sync) comes first, then "promises" (Microtasks), then "timers" (Macrotasks).

### 2. The "Call Me Back" Method (`Lab1_Callbacks.js`)
*   **The Simple Idea:** "Hey Node, read this file. When you're done, run this specific function."
*   **What we learned:** How to read a file without stopping the rest of the program.
*   **The Problem:** If you have too many "calls" inside each other, it gets messy (we call this **Callback Hell**).

### 3. The "Receipt" System (`Lab1_Promises.js`)
*   **The Simple Idea:** Instead of waiting, Node gives you a "Receipt" (a Promise). It's a guarantee that you'll get your data later.
*   **What we learned:** Using `.then()` to say "after success, do this" and `.catch()` to say "if it fails, do this."
*   **The Lesson:** It's much cleaner than the old callback way!

### 4. The "Modern & Clean" Way (`Lab1_AsyncAwait.js`)
*   **The Simple Idea:** The newest and best way to write code. It looks like a normal story you can read from top to bottom.
*   **What we learned:** Using `async` and `await`. It tells Node: "Wait here until the data arrives, then move to the next line."
*   **The Lesson:** This is how professional developers write code in 2026.

### 5. Racing vs. Waiting (`Lab1_Performance.js`)
*   **The Simple Idea:** If you have 3 files to read, should you read them one-by-one or all at once?
*   **What we learned:** Reading "Parallel" (all at once) is much faster than "Sequential" (one after another).
*   **The Result:** Our tests showed that doing things at the same time saves a lot of time!

---

## 🏆 The Big Mission: Event Logger (`Lab1_EventLogger.js`)
In the final part, we built a real-world tool that:
1.  **Creates** 3 event files (like a "Tech Conference" or "Workshop").
2.  **Reads** all of them at the same time (Super Fast!).
3.  **Analyzes** who is coming and if the room is full.
4.  **Writes** a summary report into a file called `analysis.log`.

---

## 🛠 How to use this
1.  **To see how Node thinks:** `node Lab1_EventLoop.js`
2.  **To run the main tool:** `node Lab1_EventLogger.js`

**You are now a master of Node.js Asynchronous programming! 🎓**
