import FlowArrow from "../components/FlowArrow.tsx";
import {Key, useEffect, useState} from "react";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

function VWO() {
	// load /curriculum.json
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
				<div className="fixed bg-gray-200 border border-2 rounded-2xl inset-0 flex w-1/3 info-modal content-center mx-auto my-auto justify-center p-4">
					<DialogPanel>
						<DialogTitle>{selectedProject?.name}</DialogTitle>
						<Description className="pt-2 desc" dangerouslySetInnerHTML={{__html: selectedProject?.description}}></Description>
					</DialogPanel>
				</div>
			</Dialog>
			<div>
				<h1 className=" text-3xl font-bold">Informatica op VWO</h1>
				<hr className={"my-3"}/>
			</div>
			<div className="pb-10">

				{curriculum && curriculum["curriculum"]["vwo"].map((year: any, index: any) => {
					return (
						<div key={index}>
							<h2 className="mt-8 mb-2 text-3xl font-bold mx-auto w-1/2 border border text-center"> {year["name"]} </h2>
							{/* for loop through year[periods] */}
							{year["periods"].map((period: { [x: string]: any[]; }, index: Key | null | undefined) => {
								return (
									<div key={index}>
										<FlowArrow className={"mx-auto size-16"} />
										<h3 className="mt-2 text-xl font-bold mx-auto w-1/3 border border text-center"> {period["name"]} </h3>
										{/* for loop through period[projects] */}
										{period["projects"].map((project, index) => {
											return (
												<div key={index}>
													<h4 onClick={() => setSelectedProject({name: curriculum["projects"][project]["name"], description: curriculum["projects"][project]["description"]})}
														className="hover:cursor-pointer my-2 text-lg underline underline-offset-2 font-bold mx-auto w-1/4 border border text-center"> {curriculum["projects"][project]["name"]} </h4>
												</div>
											);
										})}
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

export default VWO;
