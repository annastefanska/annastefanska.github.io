# CMS do bloga – instrukcja wgrania przez przeglądarkę (bez instalowania programów)

Ta paczka **nie zmienia** zakładek Sklep, O mnie, Oferta, Biblioteka, Kontakt ani strony głównej. Zawiera tylko konfigurację Pages CMS i obsługę nowych wpisów na blogu. Obecny artykuł o żałobie dziecka zostaje na stronie pod swoim adresem (nie jest jeszcze edytowany w CMS).

## Ważne przed rozpoczęciem

1. Zachowaj wcześniejszą kopię zapasową strony z GitHuba.
2. **Usuń z repozytorium plik `.nojekyll`** – to niezbędne, żeby GitHub Pages mógł przetworzyć artykuły. Nie usuwa się samego repozytorium. Przy pliku `.nojekyll` na GitHubie kliknij jego nazwę, następnie menu `...` / ikonę kosza → **Delete file** i **Commit changes**.
3. W `Settings → Pages` powinno być `Deploy from a branch`, `main` i `/(root)`. Jeśli ustawiony jest własny workflow GitHub Actions, daj znać – nie podmieniaj ustawień w ciemno.

## Wgrywanie plików CMS (web GitHub)

1. Rozpakuj ZIP. Otwórz na GitHubie repozytorium `annastefanska/annastefanska.github.io`.
2. Wybierz `Add file → Upload files` i przeciągnij **zawartość** rozpakowanego folderu (nie ZIP), wraz z folderami `_layouts`, `_posts`, `css` i `images`. Potwierdź przez **Commit changes**.
3. Sprawdź w głównym katalogu repozytorium, że są: `.pages.yml`, `_config.yml`, `blog.html`, foldery `_layouts`, `_posts`, `css` oraz `images`. Nie powinno być drugiego folderu o nazwie paczki.
4. Wejdź w zakładkę `Actions` na GitHubie i sprawdź, czy publikacja `pages build and deployment` zakończyła się zielonym znaczkiem. Po publikacji otwórz `https://przestrzenczulosci.pl/blog.html` i odśwież `Ctrl+F5`.

## Pierwsze logowanie do CMS

1. Otwórz https://app.pagescms.org.
2. Zaloguj się kontem GitHub, które ma prawo zapisu do repozytorium. Jeżeli pojawi się prośba o instalację autoryzowanej aplikacji Pages CMS, nadaj jej dostęp **tylko do tego repozytorium**, zamiast do wszystkich.
3. Wybierz repozytorium `annastefanska/annastefanska.github.io`, gałąź `main` i sekcję **Wpisy na blogu**.
4. Zobaczysz przykładowy szkic (nie jest publiczny). Możesz go edytować lub usunąć.
5. Wybierz nowy wpis, wpisz **Tytuł**, **Datę**, **Kategorię**, **Krótki opis**, dodaj opcjonalne **Zdjęcie główne** i treść. Włącz **Opublikowany**. Zapisz.
6. Po udanym zakończeniu procesu publikacji w GitHub Pages wpis sam pojawi się na stronie `blog.html` i dostanie własny adres.

## Dodatkowe uwagi

- Treści CMS zapisują się w repozytorium jako pliki Markdown w katalogu `_posts`. Zdjęcia trafiają do `images/blog`.
- Panel jest dostępny pod adresem `https://app.pagescms.org` (nie jest własnym formularzem logowania na Twojej witrynie).
- Edycja nowych wpisów w Pages CMS działa; wcześniejszy artykuł `artykul-zaloba-dziecka.html` pozostaje statyczny i nadal dostępny.
- **Nie wgrywaj ponownie `.nojekyll`**, gdy CMS jest aktywny.
- Nie wgrywaj ponownie pliku `blog.html` z poprzedniej paczki, bo nadpisze automatyczną listę wpisów.
- Jeśli po zapisie nie pojawia się wpis, sprawdź `Actions` na GitHubie oraz czy wpis ma opcję `published: true` i datę nie późniejszą niż bieżąca.
- Nie umieszczaj w wpisach poufnych danych pacjentów ani danych osobowych osób trzecich bez podstawy prawnej – treści są publicznie publikowane.
