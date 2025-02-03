import {Link} from "react-router-dom";


function Home() {
	return (
		<div className="mx-auto w-9/20 h-lvh">
			<div>
				<h1 className=" text-3xl font-bold">Informatica op het Corderius</h1>
				<hr className={"my-3"}/>
			</div>
			<p className="my-8 text-gray-700">
				Leerlingen van het Corderius kunnen in de bovenbouw kiezen voor het vak informatica.
				Het vak informatica is een keuzevak en wordt gegeven in de bovenbouw van zowel HAVO als VWO.
				Bij het profiel Natuur en Techniek kan je informatica kiezen als keuzevak, maar ook bij de andere profielen is het mogelijk om informatica te kiezen.
			</p>

			<h2 className="text-2xl font-bold">Wat is informatica?</h2>
			<p className="my-4 text-gray-700">
				Informatica is eigenlijk een heel brede term, bij informatica zal je vooral jezelf oriënteren op elk
				vlak.<br/>
				<br/>
				1. Programmeren<br/>
				2. Artificial Intelligence<br/>
				3. Webdevelopment<br/>
				4. Cybersecurity<br/>
				<br/>
				Dit klinkt natuurlijk allemaal heel spannend, want sommige hebben nog nooit van deze termen gehoord.
				Of worden al bang als ze kijken naar een bestand met allemaal code erin, maar geen zorgen.
				Informatica is zeker te doen voor iedereen, zeker omdat er geen toetsen zijn en je alleen maar projecten hoeft te maken.
				Voor velen is dit top, geen toetsen. Rustigere toetsweek en leren door te doen.
			</p>
			<h2 className="text-2xl font-bold">Wat ga je doen bij informatica?</h2>
			<p className="my-4 text-gray-700">
				Voor een duidelijk overzicht moet je kijken naar de verschillende pagina's voor niveaus.
				Op het VWO heb je namelijk ongeveer hetzelfde programma maar een jaartje extra.<br/>
				<br/>
			 	<Link className={"underline corderius-red"} to={"/vwo"}>1. VWO</Link><br/>
				<Link className={"underline corderius-red"} to={"/havo"}>2. HAVO</Link><br/>
			</p>

		</div>
	);
}

export default Home;
