"use client";

import { status } from "@/src/utils";
import React, { FC } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type PropsType = {
	board: {
		id: string;
		title: string;
		hasBtn: boolean;
		tasks: {
			id: string;
			name: string;
			priority: string;
			author: string;
			isStatus: string;
		}[];
	};
	handleOpen: () => void;
};

const Board: FC<PropsType> = ({ board, handleOpen }) => {
	return (
		<Droppable droppableId={"droppable-" + board.id}>
			{(provided) => (
				<div
					className="bg-[#936e83] w-[320px] h-[640px] mx-[12px] p-[20px] rounded-xl"
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<div className="flex justify-between">
						<h1 className="text-white text-2xl font-bold">{board.title}</h1>
						{board.hasBtn && (
							<button
								className="btn btn-circle btn-success text-white "
								onClick={handleOpen}
							>
								+
							</button>
						)}
					</div>

					{board?.tasks.map((task, i) => (
						<Draggable key={i} draggableId={task.id.toString()} index={i}>
							{(provided, snapshot) => (
								<div
									className={`bg-[#80596e] w-[280px] h-[120px] rounded-xl p-[16px] mt-[24px] shadow-xl`}
									{...provided.dragHandleProps}
									{...provided.draggableProps}
									ref={provided.innerRef}
								>
									<div className="">
										<div className="flex justify-between items-center">
											<h2 className="card-title text-white">{task.name}</h2>
											<span
												className={`badge badge-${
													status[task.priority]
												} badge-outline ml-5 font-medium`}
											>
												{task.priority}
											</span>
										</div>
										<div className="flex flex-col items-start mt-2 text-[#dec1d1] font-medium">
											<p className="">
												Author: <span className="ml-5 ">Name</span>
											</p>
											<p className="">
												Date: <span>2024-01-11</span>
											</p>
										</div>
									</div>
								</div>
							)}
						</Draggable>
					))}
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	);
};

export default Board;
