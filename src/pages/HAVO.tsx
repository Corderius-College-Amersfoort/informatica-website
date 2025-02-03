import {Key, useEffect, useState} from "react";
import FlowArrow from "../components/FlowArrow.tsx";
import {Description, Dialog, DialogPanel, DialogTitle} from "@headlessui/react";


function HAVO() {
	const [curriculum, setCurriculum] = useState<any>(null);
	const [selectedProject, setSelectedProject] = useState<{name: string, description: string} | null>(null);

	useEffect(() => {
		fetch("/informatica-website/curriculum.json")
			.then(response => response.json())
			.then(data => {
				setCurriculum(data);
				console.log(data);
			})
	}, []);

	return (
		<div className="mx-auto w-9/20 h-lvh">
			<Dialog open={selectedProject !== null} onClose={() => setSelectedProject(null)}>
				<DialogPanel className="fixed bg-gray-200 border border-2 rounded-2xl inset-0 w-1/3 h-1/4  mx-auto my-auto p-4">
					<DialogTitle className="text-2xl text-center">{selectedProject?.name}</DialogTitle>
					<Description className="pt-2">{selectedProject?.description}</Description>
				</DialogPanel>
			</Dialog>
			<div>
				<h1 className=" text-4xl font-bold">Informatica op HAVO</h1>
				<hr className={"my-3"}/>
			</div>
			<div className="pb-10">

				{curriculum && curriculum["curriculum"]["havo"].map((year: any, index: any) => {
					return (
						<div key={index}>
							<h2 className="mt-8 mb-2 text-3xl font-bold mx-auto w-1/2 border border text-center"> {year["name"]} </h2>
							{/* for loop through year[periods] */}
							{year["periods"].map((period: {
								[x: string]: any[];
							}, index: Key | null | undefined) => {
								return (
									<div key={index}>
										<h3 className="mt-2 text-xl font-bold mx-auto w-1/3 border border text-center"> {period["name"]} </h3>
										{/* for loop through period[projects] */}
										{period["projects"].map((project, index) => {
											return (
												<div key={index}>
													<h4 onClick={() => setSelectedProject({
														name: curriculum["projects"][project]["name"],
														description: curriculum["projects"][project]["description"]
													})}
														className="hover:cursor-pointer my-2 text-lg underline underline-offset-2 font-bold mx-auto w-1/4 border border text-center"> {curriculum["projects"][project]["name"]} </h4>
												</div>
											);
										})}
										{/* if it's the last year and the last period don't draw an arrow */}
										{index !== year["periods"].length - 1 && (
											<FlowArrow className={"mx-auto size-16"}/>
										)}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default HAVO;
