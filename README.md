# Baca Aku!
Ini adalah tutorial setup dan membuat component di project online invitation
Ikuti langkah-langkah nya!

## Clone Kode
buka visual studio code lalu buat folder untuk simpan kode ini, lalu scroll ke atas pilih menu clone di atas folder. lalu 
ketik di terminal!
```git clone (kode url kode)```

## npm install
setelah kode di clone, tulis kode dibawah (ketik di terminal yang terbuka kode yang sudah di clone) 
```npm install```

## npm run dev
setelah proses instalasi npm selesai, ketik 
```npm run dev```
untuk menjalankan kode react

# Membuat Widget atau Component
untuk membuat komponent atau widget caranya sangat mudah, kalian harus membuat nya di folder ```src\components``` dengan format PascalCase dan ekstensi file ```.tsx```

# export default NamaFunction()
agar kode bisa di import ke segala file. tulis kode ini lalu tulis kode html seperti biasa dengan tailwind (namun ingat penulisan class di react adalah className="")
```
export default function NamaFunction() {
	return (
		<div>
			<h1>Contoh HTML</h1>
		</div>
	);
}
```
