# Zweckverband Wasserversorgung Ilmtalgruppe – Website

Moderne Website gebaut mit **Astro** und **Decap CMS** – statisch, schnell, sicher.

---

## Schnellstart

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm run dev
# → http://localhost:4321

# 3. Produktionsbuild erstellen
npm run build
```

---

## Deployment auf Netlify (empfohlen, kostenlos)

### Schritt 1 – GitHub Repository erstellen
1. Gehe zu https://github.com/new
2. Repository-Name: `ilmtalgruppe-website`
3. Klicke **Create repository**
4. Lade diesen Ordner hoch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/DEIN_USERNAME/ilmtalgruppe-website.git
   git push -u origin main
   ```

### Schritt 2 – Netlify verbinden
1. Gehe zu https://app.netlify.com → **Add new site** → **Import from Git**
2. Wähle GitHub und dein Repository
3. Build-Einstellungen werden automatisch aus `netlify.toml` gelesen
4. Klicke **Deploy site**

### Schritt 3 – Netlify Identity aktivieren (für CMS-Login)
1. Im Netlify Dashboard: **Site settings** → **Identity** → **Enable Identity**
2. Unter **Registration**: auf **Invite only** stellen
3. **Services** → **Git Gateway** → **Enable Git Gateway**
4. Lade Mitarbeiter ein: **Identity** → **Invite users** → E-Mail-Adresse eingeben

### Schritt 4 – CMS-Config anpassen
Öffne `public/admin/config.yml` und trage dein GitHub-Repository ein:
```yaml
backend:
  name: github
  repo: DEIN_USERNAME/ilmtalgruppe-website  # ← hier anpassen
  branch: main
```

### Schritt 5 – Domain verknüpfen
1. Im Netlify Dashboard: **Domain management** → **Add custom domain**
2. Trage `ilmtalgruppe-starzhausen.de` ein
3. Passe die DNS-Einstellungen bei deinem Domain-Anbieter an (Netlify zeigt dir genau, was zu tun ist)

---

## CMS verwenden

Nach dem Deployment ist das CMS erreichbar unter:
```
https://deine-domain.de/admin/
```

### Was kann man im CMS bearbeiten?

| Bereich | Was ändert sich |
|---------|----------------|
| **Hinweise & Aktuelles** | Meldungen auf der Startseite (z.B. Brückentage, Störungen) |
| **Öffnungszeiten & Kontakt** | Telefonnummern, Öffnungszeiten, Notfallnummer, Adresse |
| **Team / Ansprechpartner** | Namen, Rollen, Telefonnummern aller Mitarbeiter |
| **Statistiken** | Die 4 Kennzahlen im Hero-Bereich |

### Workflow für Mitarbeiter
1. `https://deine-domain.de/admin/` aufrufen
2. Mit der per E-Mail eingeladenen Adresse einloggen
3. Inhalt bearbeiten und **Publish** klicken
4. Die Website baut sich automatisch neu (~60 Sekunden)

---

## Projektstruktur

```
ilmtalgruppe/
├── src/
│   ├── components/       # Wiederverwendbare Komponenten
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Notice.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Base.astro    # HTML-Grundgerüst
│   ├── pages/
│   │   ├── index.astro   # Startseite
│   │   └── impressum.astro
│   └── content/          # ← Alle Inhalte (vom CMS verwaltet)
│       ├── notices/      # Hinweise & Meldungen (.md)
│       ├── team/         # Mitarbeiter (.md)
│       ├── services/     # Leistungen (.md)
│       └── settings/     # Öffnungszeiten, Kontakt (.json)
├── public/
│   └── admin/            # Decap CMS
│       ├── index.html
│       └── config.yml    # ← CMS-Konfiguration
├── astro.config.mjs
├── netlify.toml
└── package.json
```

---

## Lokales CMS-Testing (ohne GitHub)

Um das CMS lokal zu testen, aktiviere den Local Backend:

1. Kommentiere in `public/admin/config.yml` die Zeile ein:
   ```yaml
   local_backend: true
   ```
2. Starte den Proxy in einem separaten Terminal:
   ```bash
   npx decap-server
   ```
3. Öffne http://localhost:4321/admin/

---

## Technologien

- **[Astro](https://astro.build)** – Static Site Generator
- **[Decap CMS](https://decapcms.org)** – Git-basiertes CMS (ehemals Netlify CMS)
- **[Netlify](https://netlify.com)** – Hosting & Identity (kostenloser Plan reicht aus)
- **DM Serif Display + DM Sans** – Schriftarten (Google Fonts)
