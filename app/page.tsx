"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(10);

	const add = () => [setCount((prev) => prev + 1)];
	const sub = () => [setCount((prev) => prev - 1)];

	return (
		<main>
			<div className="flex justify-center mt-[80px]">
				<div className="bg-[#936e83] w-[320px] h-[640px] mx-[32px] p-[20px] rounded-xl">
					<div className=" text-white flex">
						<h1 className="text-xl font-bold">To Do App</h1>
						<button className="bg-lime-500 px-[8px] rounded-[16px] font-semibold items-center ml-[140px]">
							+
						</button>
					</div>
					<div className=" font-medium text-white">
						<div className="bg-[#80596e] w-[280px] h-[120px] rounded-xl p-[16px] mt-[24px]">
							<div className="flex">
								<div>CRM System Design</div>
								<div className="bg-orange-500 rounded-[16px] font-medium items-center ml-[12px] px-[6px]">
									Medium
								</div>
							</div>
							<div className="text-[#dec1d1] mt-[8px]">
								<div>Participant: Azhar</div>
								<div>Date Added: 12/04/2020</div>
							</div>
						</div>
						<div className="bg-[#80596e] w-[280px] h-[120px] rounded-xl p-[16px] mt-[24px]">
							<div className="flex">
								<div>Statistics</div>
								<div className="bg-lime-600 rounded-[16px] font-medium items-center ml-[12px] px-[6px]">
									Low
								</div>
							</div>
							<div className="text-[#dec1d1] mt-[8px]">
								<div>Participant: Azhar</div>
								<div>Date Added: 12/04/2020</div>
							</div>
						</div>
						<div className="bg-[#80596e] w-[280px] h-[120px] rounded-xl p-[16px] mt-[24px]">
							<div className="flex">
								<div>Priorities</div>
								<div className="bg-red-500 rounded-[16px] font-medium items-center ml-[12px] px-[6px]">
									High
								</div>
							</div>
							<div className="text-[#dec1d1] mt-[8px]">
								<div>Participant: Azhar</div>
								<div>Date Added: 12/04/2020</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-[#936e83] w-[320px] h-[640px] mx-[32px] p-[20px] rounded-xl">
					<div className=" text-white">
						<h1 className="text-xl font-bold">In Progress</h1>
					</div>
					<div className=" font-medium text-white">
						<div className="bg-[#80596e] w-[280px] h-[120px] rounded-xl p-[16px] mt-[24px]">
							<div className="flex">
								<div>Notifications</div>
								<div className="bg-lime-600 rounded-[16px] font-medium items-center ml-[12px] px-[6px]">
									Low
								</div>
							</div>
							<div className="text-[#dec1d1] mt-[8px]">
								<div>Participant: Azhar</div>
								<div>Date Added: 12/04/2020</div>
							</div>
						</div>
						<div className="bg-[#80596e] w-[280px] h-[120px] rounded-xl p-[16px] mt-[24px]">
							<div className="flex">
								<div>Task Types</div>
								<div className="bg-lime-600 rounded-[16px] font-medium items-center ml-[12px] px-[6px]">
									Low
								</div>
							</div>
							<div className="text-[#dec1d1] mt-[8px]">
								<div>Participant: Azhar</div>
								<div>Date Added: 12/04/2020</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-[#936e83] w-[320px] h-[640px] mx-[32px] p-[20px] rounded-xl">
					<div className=" text-white">
						<h1 className="text-xl font-bold">Closed</h1>
					</div>
					<div>
						<div></div>
					</div>
				</div>
			</div>
		</main>
	);
}
