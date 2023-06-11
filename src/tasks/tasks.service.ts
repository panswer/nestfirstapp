import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
    private tasks: Task[] = [{
        id: "1",
        title: "first task",
        description: "some task",
        status: TaskStatus.PENDING
    }];

    getAllTasks() {
        return this.tasks;
    }

    createTasks(title: string, description: string) {
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        };

        this.tasks.push(task);

        return task;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }

    updateTasks(id: string, updatedField: any): Task {
        const task = this.getTaskById(id);

        const newTask = Object.assign(task, updatedField);

        this.tasks = this.tasks.map(task => task.id === id ? newTask : task);

        return newTask;
    }

    deleteTasks(id: string): Task {
        const taskDeleted = this.tasks[this.tasks.findIndex(task => task.id === id)];
        this.tasks = this.tasks.filter(task => task.id !== id);

        return taskDeleted;
    }
}
