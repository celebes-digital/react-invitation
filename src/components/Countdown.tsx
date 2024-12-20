import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function Countdown() {
	// const [jam, setJam] = useState(new Date().getHours());
	// const [menit, setMenit] = useState(new Date().getMinutes());
	// const [detik, setDetik] = useState(new Date().getSeconds());
	const formatWaktu = (waktu: Date) => {
		return format(waktu, "HH:mm:ss");
	}

	const target = new Date('2025-01-01 00:00:00').getTime();

	const [countdown, setCountdown] = useState(formatWaktu(new Date()))
	
	useEffect(() => {
		setInterval(() => {
			const current = new Date().getTime();
			const distance = target - current;

			setCountdown(formatWaktu(new Date(distance)));
		}, 1000)
	})

	return (
		<div className="flex justify-center items-center h-screen">
			<h1 className="text-9xl font-bold text-center">{countdown}</h1>
		</div>
	);
}