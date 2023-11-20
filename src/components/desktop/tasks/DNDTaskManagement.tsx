"use client";
import React from "react";
import { TaskType } from "@/shared/types/TaskType";
import DNDProvider from "../../wrappers/DNDProvider";
import DNDContainer from "./DNDContainer";
import { useGetTasks } from "@/hooks/useTasks";

const DNDTaskManagement = () => {
	const getTasks = useGetTasks();
	return (
		<DNDProvider>
			<DNDContainer
				tasks={getTasks?.data?.filter(
					(task: TaskType) => task.status === "todo"
				)}
				status="todo"
			/>
			<DNDContainer
				tasks={getTasks?.data?.filter(
					(task: TaskType) => task.status === "in progress"
				)}
				status="in progress"
			/>
			<DNDContainer
				tasks={getTasks?.data?.filter(
					(task: TaskType) => task.status === "done"
				)}
				status="done"
			/>
		</DNDProvider>
	);
};

export default DNDTaskManagement;