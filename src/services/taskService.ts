import api from "../lib/api";
import { TaskDefinition } from "../types/taskDefinition";

export const fetchPopularTasks = async (): Promise<TaskDefinition[]> => {
  const res = await api.get("/task-definitions/popular");
  return res.data;
};

export const addTaskToChecklist = async (
  checklistId: string,
  taskDefinitionId: string
): Promise<void> => {
  await api.post(`/checklists/${checklistId}/add-task-from-library`, {
    taskDefinitionId,
  });
};
