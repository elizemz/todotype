"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Section from "../components/section";

export default function Home() {
	return (
		<main className="flex justify-center mt-[80px]">
			<div>
				<Section />
			</div>
		</main>
	);
}
