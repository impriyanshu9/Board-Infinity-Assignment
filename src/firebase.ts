import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCoipARikLF6Wcg5KKqdALgElny-sjqBQU",
  authDomain: "task-board-1f05f.firebaseapp.com",
  projectId: "task-board-1f05f",
  storageBucket: "task-board-1f05f.appspot.com",
  messagingSenderId: "430079889708",
  appId: "1:430079889708:web:2fe578bd96755bb4659c89",
};


if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
  throw new Error("Missing Firebase configuration environment variables.");
}

export const app = initializeApp(firebaseConfig);
