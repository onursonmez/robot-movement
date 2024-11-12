# Robot Hareketi Projesi

Bu proje, yön tuşlarıyla bir robot ikonunu hareket ettirmek için React, Node.js ve MongoDB kullanarak geliştirilmiştir. Proje, Context API ile durum yönetimi, komponentler arası veri paylaşımı ve backend ile veri etkileşimi örneklerini içermektedir.

## Gereksinimler

- Docker
- Docker Compose

## Proje Yapısı

```bash
robot-movement/
├── client/ (React frontend)
├── server/ (Node.js backend)
└── docker-compose.yml
```

## Kurulum

### 1. Projeyi Klonlayın

```bash
git clone <repo-url>
cd robot-movement
```

### 2. Docker ve Docker Compose'u Kurun

Docker'ı ve Docker Compose'u sisteminize uygun şekilde kurun. Kurulum için Docker Resmi Dokümantasyonu ve Docker Compose Dokümantasyonu sayfalarını ziyaret edebilirsiniz.

## Docker ile Çalıştırma

### 1. Tüm Hizmetleri Başlatın
Aşağıdaki komut ile tüm hizmetleri başlatın:

```bash
docker-compose up --build
```

Bu komut, frontend, backend ve MongoDB hizmetlerini başlatacaktır.

### 2. Uygulamaya Erişim
Frontend: Tarayıcınızda http://localhost:3333 adresine gidin.\
Backend API: http://localhost:4444 adresinden backend API'ye erişebilirsiniz.

### Çalışma Prensibi

**Frontend:** React ile oluşturulmuş uygulama, kullanıcıdan yön tuşlarının tıklanması ile robotun pozisyonunu günceller.\
**Context API:** Robotun pozisyon bilgileri, Context API aracılığıyla uygulama genelinde yönetilmektedir.\
**Backend:** Node.js ve MongoDB kullanılarak oluşturulmuş bir API, robotun pozisyon bilgilerini alır ve kaydeder.\
**MongoDB:** Robotun son pozisyon bilgilerini saklamak için kullanılır.

### Proje ile İlgili Notlar
Proje başlangıçta robotun pozisyonunu backend'den alır ve frontend'de görüntüler.
Yön tuşlarına tıklandıkça robotun pozisyonu backend'e kaydedilir.
Sayfa yenilendiğinde veya uygulama başlatıldığında en son kaydedilen pozisyon bilgileri alınarak robotun başlangıç konumu belirlenir.

### Katkıda Bulunma
Herhangi bir hata veya öneriniz varsa, lütfen bir sorun açın ya da katkıda bulunun.

### Lisans
Bu proje MIT Lisansı altında lisanslanmıştır.