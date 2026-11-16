# Przestrzeń Czułości — CMS do wszystkich podstron

Paczka jest **aktualizacją istniejącej strony**, która już działa z GitHub Pages i Pages CMS.
Nie usuwaj repozytorium. Nie trzeba instalować żadnego programu.

## Co będzie można edytować

- Wpisy na blogu, w tym dotychczasowy tekst „Nie bójmy się dziecięcego smutku. Żałoba oczami dziecka”.
- Stronę główną, „O mnie”, „Ofertę”, „Bibliotekę”, „Sklep”, „Kontakt”.
- Nagłówki i opis strony Blog oraz stronę 404.
- Karty usług, produkty w sklepie, materiały w bibliotece — można dopisywać nowe pozycje.
- Dane do płatności w jednym miejscu (są wspólne dla Sklepu i Biblioteki).
- Logo i tekst stopki.

Wygląd HTML/CSS jest zachowany. CMS służy do zmian treści i pozycji w listach — nie do przebudowy wyglądu i stylów CSS.

## WAŻNE: zrób aktualną kopię repozytorium

1. Otwórz https://github.com/annastefanska/annastefanska.github.io
2. Kliknij **Code → Download ZIP** i zachowaj archiwum przed zmianami.

## Wgrywanie — wszystko przez przeglądarkę

1. Rozpakuj archiwum `Anna_Stefanska_CMS_Wszystkie_Podstrony_POPRAWKA.zip` na komputerze.
2. Na stronie repozytorium kliknij **Add file → Upload files**.
3. Przeciągnij zawartość rozpakowanego folderu z zachowaniem struktury katalogów. **Nie wgrywaj ZIP-a jako jednego pliku**.
4. W repozytorium pliki `index.html`, `o-mnie.html`, `oferta.html`, `biblioteka.html`, `sklep.html`, `kontakt.html`, `blog.html`, `404.html`, `artykul-zaloba-dziecka.html`, `.pages.yml` i `_config.yml` muszą być bezpośrednio w głównym katalogu.
5. Foldery `_data`, `_posts`, `_includes`, `_layouts` i `css` muszą być na tym samym poziomie co `index.html`, a nie w folderze ZIP-a.
6. Kliknij **Commit changes**.

**Nie usuwaj** `CNAME`, folderu `images`, `css/style.css`, `css/blog-cms.css` ani `js/script.js` — są potrzebne i nie zastępujemy ich w tej poprawce.

### Gdy plik `.pages.yml` nie został przesłany

Niektóre sposoby wyboru plików w Windows mogą pominąć plik zaczynający się od kropki.

1. Otwórz w repozytorium plik `.pages.yml` i sprawdź, czy zawiera zakładki „Strona główna”, „O mnie”, „Oferta”, „Biblioteka”, „Sklep” itd.
2. Jeśli został pominięty: w Pages CMS otwórz **Konfiguracja**, skopiuj zawartość `.pages.yml` z rozpakowanej paczki i wklej ją do edytora, a następnie kliknij **Zapisz**.
3. Po aktualizacji odśwież Pages CMS (`Ctrl + F5`) i sprawdź, czy repozytorium jest na gałęzi `main`.

## Sprawdzenie działania

1. Otwórz **Actions** na GitHubie i upewnij się, że najnowsze `pages build and deployment` zakończyło się zielonym znaczkiem. Jeśli nie — nie zmieniaj losowo ustawień, tylko pokaż komunikat błędu.
2. Otwórz https://przestrzenczulosci.pl/blog.html — stary artykuł powinien być widoczny w sekcji archiwum.
3. Otwórz https://app.pagescms.org — po odświeżeniu powinieneś widzieć nowe zakładki po lewej stronie.
4. W sekcji **Wpisy na blogu** znajdziesz „Nie bójmy się dziecięcego smutku. Żałoba oczami dziecka”, który teraz można edytować w CMS.
5. Wejdź do „O mnie”, zmień jedno słowo testowo, zapisz i po publikacji sprawdź stronę. Następnie przywróć oryginalny tekst.

## Co stało się z poprzednim artykułem?

Artykuł był wcześniej zapisany na stałe w HTML, więc nie pojawiał się w CMS. Teraz jego pełną treść zapisaliśmy w `_posts/2026-02-10-zaloba-oczami-dziecka.md`. Został oznaczony jako wyróżniony w archiwum, co zachowuje układ bloga.

Stary adres `artykul-zaloba-dziecka.html` został zachowany jako przekierowanie do nowego adresu `/blog/zaloba-oczami-dziecka/`. Nie ma potrzeby usuwać starego pliku.

## Ważne

- Dodanie nowego wpisu przez CMS nie wymaga edycji HTML.
- Wprowadzanie zmian w CSS/układzie strony nadal wymaga zmiany kodu.
- Sklep nadal nie pobiera płatności automatycznie — działa instrukcja tradycyjnego przelewu i ręczna obsługa zamówień.
- Do działania strony wymagane jest przetworzenie zmian przez Jekylla w GitHub Pages.
- Jeśli od czasu przygotowania poprzedniej wersji wykonywano ręczne zmiany na stronie, porównaj je przed podmianą — paczka została przygotowana na bazie ostatniego zestawu plików udostępnionych w rozmowie.
