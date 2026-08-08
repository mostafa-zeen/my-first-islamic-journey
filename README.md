# My First Islamic Journey | رحلة الإسلام الأولى

Localhost-first bilingual Islamic learning app for children aged 4-8.

This version is a static PWA so it runs now on Windows localhost with no npm,
Flutter, Dart, or React Native install. Later, the same `assets/data` content
and media folders can be reused inside Flutter, React Native, Capacitor, or
Electron.

## Run Now On Windows Localhost

### Option A: XAMPP Apache

1. Open XAMPP Control Panel.
2. Start Apache.
3. Open:

```powershell
http://localhost/my-first-islamic-journey/
```

### Option B: PHP local server

If Apache is not running, use PowerShell:

```powershell
cd C:\XAMPP2\htdocs\my-first-islamic-journey
php -S 127.0.0.1:8088
```

Then open:

```powershell
http://127.0.0.1:8088/
```

## What Works Now

- English and Arabic language toggle.
- Full RTL layout when Arabic is selected.
- Home screen with child greeting and six circular modules.
- Stories module with YouTube video embeds, image gallery, narration controls,
  and moral lesson modal.
- Duas and Surahs grid with Arabic text, transliteration, translation, audio
  controls, and browser read-aloud fallback.
- Salah tracker with five daily prayers, checkboxes, stars, and weekly report.
- Pillars of Islam drag-and-drop game plus quiz and Iman chips.
- Good Manners daily challenges and virtual flower garden.
- Islamic calendar with browser Hijri date, countdown cards, and fun facts.
- PIN-protected parent dashboard. Default local PIN: `1234`.
- Local progress saved in `localStorage`.
- Service worker and manifest for installable/offline-ready PWA behavior.
- Notification permission flow for local daily-reminder testing.

## Media Folders

```text
assets/videos/   optional local MP4 story videos
assets/images/   generated and SVG child-friendly illustrations/icons
assets/audio/    MP3 dua, Quran, and story narration files
assets/data/     JSON content used by localhost and Firebase migration
```

The app runs today even if MP3/MP4 files are not present:

- Video currently uses `youtube-nocookie.com` embeds from `content.json`.
- Audio controls point to MP3 paths, and the app falls back to browser
  speech synthesis when recordings are missing.

## Add Local MP4 And MP3 Later

1. Put story videos in `assets/videos/`.
2. Put dua/story narration MP3 files in `assets/audio/`.
3. Update `assets/data/content.json` paths if you change filenames.

Example:

```json
{
  "video_path": "assets/videos/nuh.mp4",
  "audio_ar": "assets/audio/nuh_ar.mp3",
  "audio_en": "assets/audio/nuh_en.mp3"
}
```

## Firebase Firestore Setup Later

For the static localhost version, content is loaded from:

```text
assets/data/content.json
```

For Firebase later:

1. Create a Firebase project.
2. Create Firestore collections:
   - `stories`
   - `duas`
   - `prayers`
   - `pillars`
   - `manners`
   - `facts`
   - `calendar_targets`
3. Keep the same field names used in `assets/data/content.json`.
4. For Android/iOS later, download:
   - `google-services.json`
   - `GoogleService-Info.plist`
5. For this Windows localhost PWA, use Firestore REST or keep JSON fallback.

Static Firestore REST example shape:

```js
const endpoint =
  "https://firestore.googleapis.com/v1/projects/YOUR_PROJECT/databases/(default)/documents/stories";
```

Do not put private service account keys in browser code.

## Later Native App Paths

Recommended path for "app later":

1. Keep this PWA as the working prototype.
2. Wrap with Capacitor for Android/iOS/Windows WebView, or port screens to
   Flutter after the content and UX are approved.
3. Reuse:
   - `assets/data/content.json`
   - `assets/images`
   - `assets/audio`
   - `assets/videos`
4. Replace browser `localStorage` with SharedPreferences/SQLite.
5. Replace browser notifications with Firebase Cloud Messaging.

## Original Flutter Prerequisites For Later

If you still want the Flutter version later, install:

1. Flutter SDK.
2. Visual Studio with **Desktop development with C++** workload.
3. Android Studio for Android emulator, optional for Windows desktop testing.
4. VS Code with Flutter and Dart extensions.

Then a future Flutter project would run with:

```powershell
flutter pub get
flutter run -d windows
```

## Original React Native Prerequisites For Later

If you choose React Native for Windows later, install:

1. Node.js LTS.
2. Git.
3. Visual Studio with Windows app development workloads.
4. Android Studio, optional for Android testing.
5. VS Code with React Native Tools.

Then a future React Native Windows project would run with:

```powershell
npm install
npx react-native run-windows
```

## Files

```text
index.html
styles.css
app.js
manifest.webmanifest
sw.js
assets/data/content.json
assets/images/*
assets/audio/README.txt
assets/videos/README.txt
```

## Imported PDF Story Content

The Stories module has been populated from:

```text
G:\My Drive\photo\Zeedan\Stories-of-childern-Final.pdf
```

Imported output:

```text
assets/data/content.json              30 structured story records
assets/images/pdf-stories/*.jpg       story title-page thumbnails rendered from the PDF
```

Each story record includes English and Arabic title/subtitle, summary, moral,
PDF page range, audio placeholders, gallery images, and activity questions.
Recorded MP3 and MP4 files can be added later without changing the app code.