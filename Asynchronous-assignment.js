
//Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time.


async function message_with_delay(message, delaytime) {
    await new Promise(resolve =>
       setTimeout(resolve, delaytime));
    console.log(message);
   }
   message_with_delay("Hello my name is Queen", 2000);


//    You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID.
//  Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.


const userIds = [1, 2, 3, 4, 5];
async function fetchAndLogUserDataSequentially(userIds) {
 for (const id of userIds) {

 try {
 const userData = await getUserData(id);
 console.log(userData);
 } 
 
 catch (error) {
 console.error(`Error fetching data for user ID ${id}:`, error);
 }
 }
}


fetchAndLogUserDataSequentially(userIds);
function getUserData(id) {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 const userData = { id: `User ${id}`, age: Math.floor(Math.random() * 50) + 20 };
 resolve(userData);
 }, Math.random() * 1000);
 });
}

// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful,
//  and a custom error message if there's an error.


async function performTask() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const isSuccess = Math.random() < 0.5;
    if (isSuccess) {
    resolve("Task completed successfully.");
    } else {
    reject("Error: Task encountered an error.");
    }
}, 4000);
});
}
async function executeTask() {
try {
const result = await performTask();
console.log("Success:", result);
} catch (error) {
console.error("Error:", error);
}
}
executeTask();

// Question 4

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
    const randomValue = Math.random();
    if (randomValue > failureProbability) {
    resolve(`${taskName} succeeded`);
    } else {
    reject(`${taskName} failed`);
    }
    });
   }
   async function executeWithRetry(taskName, retries, failureProbability) {
    for (let i = 0; i <= retries; i++) {
    try {
    const result = await unstableTask(taskName, failureProbability);
    console.log(result);
    return;
    } catch (error) {
    console.log(error);
    if (i === retries) {
    throw new Error(`Failed after ${retries} retries`);
    }
    }
    }
   }
   executeWithRetry("cook", 3, 0.5);

   