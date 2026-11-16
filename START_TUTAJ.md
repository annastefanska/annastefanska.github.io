# Przestrzeń Czułości — pełna strona do podmiany na GitHubie

To **kompletna strona**, którą można wgrać zamiast poprzedniej zawartości repozytorium `annastefanska.github.io`. Nie trzeba wcześniej instalować poprzednich poprawek.

## Co zawiera

- Jednolity wygląd wszystkich podstron (zieleń, złoto, jasne tło), zgodny ze stroną główną i „O mnie”.
- Menu i układ dopasowujące się do telefonów i tabletów.
- Stronę główną, „O mnie”, Ofertę, Bibliotekę, Blog z artykułem, Sklep i Kontakt.
- Dane do przelewu w Bibliotece i Sklepie, przyciski kopiowania oraz możliwość przejścia do e-maila z potwierdzeniem płatności.
- Logo w nagłówku, sekcji powitalnej i na karcie przeglądarki (favicon).
- Plik `CNAME` z domeną `przestrzenczulosci.pl`.

**W tej paczce nie ma CMS.** Panel do edycji treści dodamy w kolejnym etapie.

## Jak podmienić całą stronę

1. Zrób kopię zapasową obecnego repozytorium GitHub.
2. Otwórz lokalny folder repozytorium `annastefanska.github.io` za pomocą GitHub Desktop.
3. Usuń ze środka stare pliki i katalogi, **nie usuwając ukrytego katalogu `.git`**. Nie usuwaj repozytorium na GitHubie.
4. Rozpakuj ZIP i skopiuj **całą zawartość paczki** do folderu repozytorium. `index.html` i `CNAME` muszą być na najwyższym poziomie, a katalogi `css`, `js`, `images` obok nich. Skopiuj także ukryty plik `.nojekyll`.
5. W GitHub Desktop wybierz **Commit to main**, następnie **Push origin**.
6. W GitHub → **Settings → Pages** sprawdź publikację z gałęzi `main` i katalogu `/(root)`.
7. Otwórz stronę i sprawdź każdą podstronę na komputerze i telefonie. Jeśli ikona na karcie się nie zmieni, spróbuj okna prywatnego lub mocnego odświeżenia.

## Ważne przed publikacją

- **Sprawdź poprawność rachunku bankowego, odbiorcy, cen i adresów e-mail** — wpisano dane podane do strony.
- Płatności są przeprowadzane **tradycyjnym przelewem**, nie przez automatyczną bramkę. Przycisk „Wyślij potwierdzenie e-mailem” otwiera program pocztowy klienta; nie wysyła nic automatycznie.
- Dostęp do materiałów po zaksięgowaniu wpłaty jest obsługiwany ręcznie.
- Nie ma formularza z automatyczną wysyłką, panelu logowania ani CMS.

## Rozmieszczenie plików

`index.html`, `o-mnie.html`, `oferta.html`, `biblioteka.html`, `blog.html`, `sklep.html`, `kontakt.html` to osobne podstrony. Wspólny wygląd znajduje się w `css/style.css`, a obsługa menu i kopiowania w `js/script.js`.
