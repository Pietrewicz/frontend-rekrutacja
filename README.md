# Frontend Rekrutacja - Lista zadań

## Struktura UI

### Widok desktop >= 768px
Layout dynamiczny, gdzie nie jest wybrane zadanie do podglądu lista znajduje się na środku ekranu w jednej kolumnie.
Po wybraniu zadania, układ zmienia się:
- **Lewa kolumna (1/3 szerokości)**: Lista zadań
Każdy element listy posiada:
  - Nazwa zadania
  - Status
  - Czas i termin
  - Przypisany użytkownik (widoczny tylko awatar)
- **Prawa kolumna (2/3 szerokości)**: Szczegóły zadania
  - Nazwa
  - Status
  - Czas i termin
  - Użytkownik (awatar + pełna nazwa)
  - Opis zadania

  ### Widok mobile < 768px
  Początkowo tylko lista zadań, jedna kolumna zajmująca cały ekran.
  Po wybraniu elementu listy: widok szczegółów zadania z przyciskiem "wróć" na dole oraz ikoną krzyżyka na górze również do zamknięcia.

## Tailwind CSS i responsywność

Projekt używa Tailwind CSS v4.

- Klasy do zapewnienia responsywności:
    - Jeden breakpoint prefix: style z `md:` dla większych ekranów, reszta mobile-first
- Podział layoutu:
    - grid na desktop, np. `grid-cols-3` na wyśrodkowanym kontenerze, `col-span-3` na liście gdy element nie wybrany, `col-span-1` po wybraniu elementu + `col-span-2` dla rozsuniętego widoku szczegółów
    - desktop kontener listy prawdopobodnie z nałożoną procentową szerokością (np `w-1/2`), mobile `w-screen`
    - mobile prawdopodobnie układ flexbox, `flex-col`
- Czcionki
    - różnice w wielkości tekstów między desktop i mobile, np `text-3xl` na nagłówkach desktop i `text-2xl` w mobile
    - `text-ellipsis` na tytułach zadań mobile, na desktop prawdopodobnie mogą być bez ucinania

## Przełączanie widoków

- Użycie Signals do zarządzania aktualnie wybranym zadaniem z listy
- Wyświetlenie szczegółów zadania tylko po wybraniu elementu
    - Raczej użyję @if w template do sterowania wyświetlaniem widoku szczegółów
    - Zależnie od wybranego elementu sterowanie klasami układu
(szczegóły przejść i animacji w planowanych interakcjach)

## Wyświetlane informacje

### Lista zadań
- Nazwa zadania
- Status ('Do zrobienia', 'W trakcie', 'Ukończone')
- Czas (format HH:mm)
- Termin (data format dd.mm.yyyy)
- Przypisany użytkownik w formie widocznego awatara, gdy nieprzypisany: ikona placeholdera (lub brak awatara?)

### Widok szczegółów
- Nazwa zadania
- Status
- Czas
- Termin
- Szczegóły przypisanego użytkownika: awatar + pełna nazwa, jeśli nieprzypisany to ikona + "Nie przypisano"
- Opis zadania
- Ikona krzyżyka do zamknięcia widoku

Dodatkowo, gdy data terminu już minęła, na ikonie pojawi się alert (ping).
[Możliwe, że dodam tagi lub kategorie do zadań, mała chmura tagów na dole widoku szczegółów/kafelka na liście?]

## Planowane interakcje

- Kliknięcie elementu listy ustawia go jako aktywny
- Wyraźne wyróżnienie wybranego elementu na liście w widoku desktop (np. border, tło)
- Efekty hover na elementach listy
- W widoku mobilnym prawdopodobnie inny/dodatkowy efekt przy dotknięciu elementu (np. scale)
- Animacje przejścia widoku
    - Desktop: widok szczegółów rozsuwa się i lista zadań 'odsuwa się' w bok do lewej kolumny; po zamknięciu reverse 
    - Mobile: widok szczegółów rozsuwa się od dołu, zajmując cały ekran; po zamknięciu reverse
- Opcjonalnie: wejście na widok listy wywołuje animację nagłówka + elementów na liście (np. fade in/slide in) 

## Logi

- 18.06
    - przygotowanie makiet poglądowych 
    - inicjalizacja projektu, dodanie bibliotek, fontów, pluginów, ustawienie edytora i repozytorium
    - utworzenie bazowej struktury folderów, dodanie assets

Planowane rozpoczęcie: 19.06
19.06
    - 8:30 początek zadania, utworzenie komponentów
    - 9:30 przerwa techniczna, bug fixing - klasy tailwinda przestały działać
    - 10:15 resume kodowania po naprawieniu buga