import { LINKS } from "@/constants";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flexCenter bg-neutral-30 min-h-screen">
			<section className="flexCenter flex-col gap-6 p-6 rounded-2xl bg-neutral-20 w-[330px]">
				<div>
					<Image
						src="/avatar-jessica.jpeg"
						alt="user-photo"
						width={90}
						height={90}
						className="rounded-full"
					/>
				</div>
				<div className="flex flex-col gap-6 text-center">
					<div className="flex flex-col gap-1">
						<h2 className="text-white text-2xl font-semibold">
							Jessica Randall
						</h2>
						<h3 className="text-green-10 font-semibold text-sm">
							London, United Kingdom
						</h3>
					</div>
					<p className="text-white text-sm">
						"Front-end developer and avid reader."
					</p>
				</div>
				<div className="flex flex-col gap-4 w-full">
					{LINKS.map((link) => (
						<a
							href="/"
							type="button"
							key={link}
							className="bg-neutral-10 rounded-md py-3 hover:bg-green-10 text-white cursor-pointer text-sm font-semibold hover:text-neutral-30 text-center"
						>
							{link}
						</a>
					))}
				</div>
			</section>
		</main>
	);
}
