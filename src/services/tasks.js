import { 
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter
} from 'firebase/firestore';
import { db } from '../config/firebase';

const TASKS_PER_PAGE = 10;

export const createTask = async (userId, taskData) => {
  try {
    const tasksRef = collection(db, 'tasks');
    const newTask = {
      ...taskData,
      userId,
      createdAt: new Date().toISOString(),
      completed: false
    };
    const docRef = await addDoc(tasksRef, newTask);
    return { id: docRef.id, ...newTask };
  } catch (error) {
    throw error;
  }
};

export const getTasks = async (userId, lastDoc = null, searchTerm = '') => {
  try {
    const tasksRef = collection(db, 'tasks');
    let q = query(
      tasksRef,
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(TASKS_PER_PAGE)
    );

    if (lastDoc) {
      q = query(q, startAfter(lastDoc));
    }

    const snapshot = await getDocs(q);
    const tasks = [];
    let lastVisible = null;

    snapshot.forEach((doc) => {
      const task = { id: doc.id, ...doc.data() };
      if (
        !searchTerm ||
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        tasks.push(task);
      }
    });

    if (!snapshot.empty) {
      lastVisible = snapshot.docs[snapshot.docs.length - 1];
    }

    return { tasks, lastVisible };
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (taskId, updates) => {
  try {
    const taskRef = doc(db, 'tasks', taskId);
    await updateDoc(taskRef, updates);
    return { id: taskId, ...updates };
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const taskRef = doc(db, 'tasks', taskId);
    await deleteDoc(taskRef);
    return taskId;
  } catch (error) {
    throw error;
  }
};
