# PrimeStudio 3M — official website

Современный англоязычный сайт игровой студии PrimeStudio 3M. Сайт использует официальные данные, ссылки, иконки и скриншоты игр из Google Play.

## Публикация на GitHub Pages

1. Загрузите всё содержимое этой папки в репозиторий `primestudio3m.github.io`.
2. На GitHub откройте **Settings → Pages**.
3. В разделе **Build and deployment** выберите **Source: GitHub Actions**.
4. Откройте вкладку **Actions** и дождитесь завершения задачи `Deploy PrimeStudio 3M to GitHub Pages`.
5. Сайт появится по адресу `https://primestudio3m.github.io/`.

После будущих изменений достаточно снова отправить файлы в ветку `main` или `master` — сайт обновится автоматически.

## Локальный запуск

Требуется Node.js 22 или новее.

```bash
npm install
npm run dev
```

Статическая сборка для GitHub Pages:

```bash
npm run build:pages
```

Готовые статические файлы появятся в папке `out`.
