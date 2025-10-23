**Wash Shoes API**

REST API sederhana untuk layanan daftar barang cuci sepatu, dibuat menggunakan **Node.js + Express.js** dan disimpan di **Supabase Database**.  
API ini mendukung fitur **CRUD (Create, Read, Update, Delete)** serta **filter status** pada data sepatu. Wash Shoes API adalah proyek backend sederhana yang digunakan untuk mencatat, memperbarui, dan menghapus data cucian sepatu.  


Aplikasi ini di-deploy secara publik menggunakan **Vercel** agar dapat diakses dari mana saja.
namun terjadi error saat di deploy menggunakan vercel, oleh karena itu dokumentasi akan ditambahkan disini 
agar mengurangi kekeliruan

## Tujuan & Fitur Utama

**Tujuan**
- Membuat layanan REST API sederhana menggunakan Express.js
- Menyimpan data di database Supabase
- Mengimplementasikan operasi CRUD secara penuh
- Melakukan deployment ke platform Vercel

**Fitur**
- **GET /items** → Mengambil semua data sepatu  
- **GET /items?status=Selesai** → Menyaring data berdasarkan status  
- **GET /items/:id** → Mengambil satu data berdasarkan ID  
- **POST /items** → Menambahkan data cucian baru  
- **PUT /items/:id** → Memperbarui data cucian  
- **DELETE /items/:id** → Menghapus data cucian  

---

## Struktur Data (Supabase Table: `items`)

<img width="228" height="281" alt="image" src="https://github.com/user-attachments/assets/a2984adf-24b8-4b2f-81d3-7e10e1bf8bf8" />


## Contoh Request & Response

**GET Semua Item** (proses get menggunakan aplikasi POSTMAN)
<img width="841" height="222" alt="image" src="https://github.com/user-attachments/assets/2e9401bc-882b-49df-bb4f-e11361102401" />
[
    {
        "id": "37d7a626-424f-4cc4-a814-2ec9917f08e0",
        "name": "Vans Old Skool",
        "customer_name": "Siti",
        "status": "Menunggu",
        "price": 55000,
        "note": "Cuci + semir",
        "created_at": "2025-10-23T14:05:25.146919+00:00",
        "updated_at": "2025-10-23T14:05:25.146919+00:00"
    },
    {
        "id": "bc5b6a0b-69b7-45c2-92f4-6ea547642c3f",
        "name": "Converse Chuck Taylor",
        "customer_name": "Ani",
        "status": "Selesai",
        "price": 45000,
        "note": "Selesai, siap diambil",
        "created_at": "2025-10-23T12:37:00.778331+00:00",
        "updated_at": "2025-10-23T12:37:00.778331+00:00"
    },
    {
        "id": "fbfa65d0-e1c8-4ec4-91e0-237c91d5266b",
        "name": "Nike Air Max",
        "customer_name": "Budi",
        "status": "Selesai",
        "price": 50000,
        "note": "Sudah dicuci",
        "created_at": "2025-10-23T12:37:00.778331+00:00",
        "updated_at": "2025-10-23T14:10:01.016911+00:00"
    }
]

**POST Item** (proses get menggunakan aplikasi POSTMAN)
<img width="832" height="338" alt="image" src="https://github.com/user-attachments/assets/3190730e-aa55-44af-9c67-f4394d4b9cae" />
{
    "id": "d1786e85-dc94-4cba-a136-90595d47e954",
    "name": "Vans Old Skool",
    "customer_name": "Siti",
    "status": "Menunggu",
    "price": 55000,
    "note": "Cuci + semir",
    "created_at": "2025-10-23T14:08:13.865627+00:00",
    "updated_at": "2025-10-23T14:08:13.865627+00:00"
}

**Put Item** (proses get menggunakan aplikasi POSTMAN)
<img width="847" height="290" alt="image" src="https://github.com/user-attachments/assets/f392df04-6b17-443f-808f-51459d038896" />
{
    "id": "fbfa65d0-e1c8-4ec4-91e0-237c91d5266b",
    "name": "Nike Air Max",
    "customer_name": "Budi",
    "status": "Selesai",
    "price": 50000,
    "note": "Sudah dicuci",
    "created_at": "2025-10-23T12:37:00.778331+00:00",
    "updated_at": "2025-10-23T14:10:01.016911+00:00"
}

**Delete Item** (proses get menggunakan aplikasi POSTMAN)
<img width="836" height="318" alt="image" src="https://github.com/user-attachments/assets/1572f7c1-2d05-417d-9056-7e9d1dfee0b1" />
{
    "message": "deleted",
    "item": {
        "id": "d1786e85-dc94-4cba-a136-90595d47e954",
        "name": "Vans Old Skool",
        "customer_name": "Siti",
        "status": "Menunggu",
        "price": 55000,
        "note": "Cuci + semir",
        "created_at": "2025-10-23T14:08:13.865627+00:00",
        "updated_at": "2025-10-23T14:08:13.865627+00:00"
    }
}




