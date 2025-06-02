import { TaskDefinition } from "./taskDefinition";

export interface ChecklistTask {
  taskDefinition: TaskDefinition | string; // populated or just id
  _id?: string;
  completed?: boolean;
}

export interface Checklist {
  _id: string;
  title: string;
  tasks: ChecklistTask[];
  createdAt?: string;
  updatedAt?: string;
}
