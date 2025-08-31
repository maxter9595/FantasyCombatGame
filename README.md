# 🎮 FantasyCombatGame - пошаговая RPG игра в стиле фэнтези

<img src="./demo/1-intro/1.gif" width="100%">

## 1. Ограничения при работе с проектом

* **Браузерное приложение**: приложение работает только в среде браузера, требуется сборка через Webpack
* **Фиксированный размер поля**: игровая доска жестко задана размером клеток 8x8
* **Статический набор персонажей**: доступно 3 класса для игрока и 4 класса для искусственного интеллекта (ИИ). Добавление новых классов потребует изменения кода
* **Упрощенный ИИ**: противник атакует ближайшую слабую цель или двигается случайным образом
* **Локальное хранение**: прогресс и рекорды сохраняются только в localStorage браузера
* **Отсутствие мультиплеера**: реализован исключительно одиночный режим игры

## 2. Особенности игры

### 2.1. Начало игры

- Приложение запускается в браузере
- Для начала новой игры нажимается кнопка ```New Game```
- После запуска новой игры игра автоматически генерирует новую группу персонажей

<img src="./demo/2-functionality/1.gif" width="100%">

### 2.2. Пошаговая система

- При клике на одного из героев на нём появится желтый кружок подсветки, и он станет доступным для передвижения
- Доступные действия в виде клеток:
  - Зеленые клетки 🟢 - доступны для перемещения
  - Красные клетки 🔴 - враги доступные для атаки
- Возможные действия:
  - Перемещение 🚶 - клик на зеленую клетку для перемещения
  - Атака ⚔️ - клик на красную клетку с врагом для атаки
- Ход ИИ (противника):
  - После хода игрока ИИ автоматически сделает свой ход
  - ИИ  по мере возможности будет атаковать ваших персонажей
  - Если атака невозможна - ИИ просто переместит своего персонажа

<img src="./demo/2-functionality/2.gif" width="100%">

### 2.3. Дистанции персонажей

- Ближний бой (Swordsman, Undead):
  - Перемещение: 4 клетки
  - Атака: 1 клетка

<table>
  <tr>
    <td><img src="./src/img/characters/swordsman.png" width="100%"></td>
    <td><img src="./src/img/characters/undead.png" width="100%"></td>
  </tr>
</table>

- Дальний бой (Bowman, Zombie):
  - Перемещение: 2 клетки
  - Атака: 2 клетки

<table>
  <tr>
    <td><img src="./src/img/characters/bowman.png" width="100%"></td>
    <td><img src="./src/img/characters/zombie.png" width="100%"></td>
  </tr>
</table>

- Маги (Magician, Daemon):
  - Перемещение: 1 клетка
  - Атака: 4 клетки

<table>
  <tr>
    <td><img src="./src/img/characters/magician.png" width="100%"></td>
    <td><img src="./src/img/characters/daemon.png" width="100%"></td>
  </tr>
</table>

- Vampire (вампир): 
  - Перемещение: 2 клетки
  - Атака: 2 клетки

<table>
  <tr>
    <td><img src="./src/img/characters/vampire.png" width="100%"></td>
    <td><img src="./src/img/characters/vampire.png" width="100%"></td>
  </tr>
</table>

- Стратегические советы:
  - Используйте дальнобойных персонажей в тылу
  - Ближний бой ставьте на переднюю линию
  - Магов защищайте - они хрупкие, но могущественные

### 2.4. Повышение уровня

- Персонаж автоматически повышает уровень после победы над врагом
- При повышении уровня увеличиваются параметры героя и восстанавливается здоровье

<img src="./demo/2-functionality/3.gif" width="100%">


### 2.5. Уровни

- После победы над всеми врагами игрока перебросит на новый уровень с новой игровой доской
- С каждым уровнем количество персонажей увеличивается на 1 штуку

<img src="./demo/2-functionality/4.gif" width="100%">

### 2.6. Управление игрой

- ```New Game``` - начать новую игру (текущий прогресс будет потерян)
- ```Save Game``` - сохранить текущее состояние игры
- ```Load Game``` - загрузить последнее сохранение

<img src="./demo/2-functionality/5.gif" width="100%">

## 3. Инструкция по локальному запуску проекта

### 3.1. Клонирование репозитория

* Клонирование репозитория:

```bash
git clone https://github.com/maxter9595/FantasyCombatGame.git
cd FantasyCombatGame
```

<img src="./demo/3-local-setup/1.gif" width="100%">

### 3.2. Установка пакетов и сборка проекта. Тестирование

* Сборка проекта и тестирование:

```bash
npm install
npm run build
npm run test
```

<img src="./demo/3-local-setup/2.gif" width="100%">

### 3.3. Запуск Docker

- Запуск Docker Desktop. Его наличие необходимо для запуска Docker-контейнеров
  
- Сборка и запуск Docker:

```bash
docker compose build
docker compose up -d
```

<img src="./demo/3-local-setup/3.gif" width="100%">

### 3.4. Открытие приложения

* Ссылка для открытия приложения: [http://localhost/](http://localhost/)

<img src="./demo/3-local-setup/4.gif" width="100%">


## 4. Инструкция по деплою проекта на сервере

### 4.1. Покупка сервера и подключение к нему

* Рег.RU - Облачный сервер с предустановленным Docker: [https://www.reg.ru/cloud/docker](https://www.reg.ru/cloud/docker)

* Пример IP-адреса и информация о сервере для покупки:

```
- IP-адрес: 91.197.98.198
- Предустановленный Docker: да 
- Образ: Ubuntu
- Тарифы и конфигурации: производительный
- Тариф: HP C2-M2-D40
- Регион размещения: Москва
- Плавающий (публичный) IP-адрес: да
- Резервное копирование: да
```

* Вход на сервер после его приобретения:

```bash
ssh root@91.197.98.198
```

<img src="./demo/4-server-deploy/1.gif" width="100%">



### 4.2. Подготовка сервера для деплоя

* Создание пользователя и добавление его в группу sudo:

```bash
adduser myuser && usermod -aG sudo myuser
```

* Установка зависимостей:

```bash
apt update && apt upgrade -y && apt install -y git nginx ufw
```

* Настройка firewall:

```bash
sudo ufw allow 3000 
sudo ufw allow 22
ufw allow 80
ufw enable
```

* Запуск Docker:

```bash
# На выбранном сервере Docker уже предустановлен
systemctl enable docker
systemctl start docker
```

* Добавление пользователя в группу docker и его переподключение на сервер для утверждения прав:

```bash
usermod -aG docker myuser
exit

# Вход по паролю, заданному пользователю через adduser myuser
ssh myuser@91.197.98.198
```

<img src="./demo/4-server-deploy/2.gif" width="100%">

### 4.3. Клонирование репозитория и сборка проекта

* Клонирование репозитория:

```bash
git clone https://github.com/maxter9595/FantasyCombatGame.git && cd FantasyCombatGame
```

* Установка node.js:

```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - && sudo apt-get install -y nodejs
```

* Сборка и тестирование проекта

```bash
npm install && npm run build && npm run test && cd ~/FantasyCombatGame
```

<img src="./demo/4-server-deploy/3.gif" width="100%">

### 4.4. Запуск Docker

* Остановка системного Nginx:

```bash
sudo netstat -tulpn | grep :80
sudo systemctl stop nginx && sudo systemctl disable nginx
```

* Запуск Docker со своими Nginx конфигурациями:

```bash
docker compose build && docker compose up -d
sudo netstat -tulpn | grep :80
```

<img src="./demo/4-server-deploy/4.gif" width="100%">

### 4.5. Открытие приложения

* Ссылка для открытия приложения: [http://91.197.98.198/](http://91.197.98.198/)

<img src="./demo/4-server-deploy/5.gif" width="100%">

## 5. Настройка автодеплоя проекта (CI/CD)

### 5.1. Генерация SSH-ключа на локальном ПК

* Генерация SSH-ключа на локальном ПК:

```bash
ssh-keygen -t ed25519 -C "max.t95@bk.ru"
```

* Вывод SSH-ключа из локального ПК для копирования:

```bash
type $env:USERPROFILE\.ssh\id_ed25519.pub
```

```bash
# Копируем SSH-ключ
ssh-ed25519 AAAA...Ed max.t95@bk.ru
```

<img src="./demo/5-ci-cd/1.png" width="100%">

### 5.2. Генерация SSH-ключа на сервере

* Вход на сервер:

```bash
ssh myclouduser@91.197.98.198
```

* Генерация SSH-ключа на сервере:

```bash
ssh-keygen -t ed25519 -C "max.t95@bk.ru"
```

* Вывод SSH-ключа из сервера для просмотра:

```bash
ssh-keygen -y -f ~/.ssh/id_ed25519
```

```bash
# SSH-ключ из сервера понадобится для удаленного подключения к GitHub
ssh-ed25519 AAAA...Mu max.t95@bk.ru
```

<img src="./demo/5-ci-cd/2.png" width="100%">

### 5.3. Добавление SSH-ключей из локального ПК и сервера в список авторизованных ключей сервера

* Ввод SSH-ключа из сервера в список авторизированных ключей:

```bash
ssh-keygen -y -f ~/.ssh/id_ed25519 >> ~/.ssh/authorized_keys
```

* Ввод SSH-ключа из локального ПК в список авторизированных ключей:

```bash
echo "ssh-ed25519 AAAA...Ed max.t95@bk.ru" >> ~/.ssh/authorized_keys
```

* Просмотр списка авторизированных ключей:

```bash
cat ~/.ssh/authorized_keys
```

```bash
# В результате должно быть два SSH-ключа в списке авторизованных ключей
ssh-ed25519 AAAA...Mu max.t95@bk.ru
ssh-ed25519 AAAA...Ed max.t95@bk.ru
```

<img src="./demo/5-ci-cd/3.png" width="100%">

### 5.4. Настройка sudo без пароля для CI/CD

* Настройка прав для authorized_keys:

```bash
chmod 600 ~/.ssh/authorized_keys && chmod 700 ~/.ssh
```

* Вход в visudo и добавление параметров для обхода паролей пользователя при деплое:  

```bash
sudo visudo
```

```bash
# Добавляем в конце файла следующее:
myclouduser ALL=(ALL) NOPASSWD: ALL
```

* Выход из сервера и проверка входа на сервер без пароля:

```bash
exit
ssh myclouduser@91.197.98.198
# Если всё ок — войдём без пароля
```

<img src="./demo/5-ci-cd/4.gif" width="100%">

### 5.5. Привязка SSH-ключа к GitHub

* Вывод публичного SSH-ключа для интеграции с GitHub:

```bash
cat ~/.ssh/id_ed25519.pub
```

```bash
# Копируем все, что будет выведено
ssh-ed25519 AAAA...Mu max.t95@bk.ru
```

* Привязка публичного ключа к GitHub:

   * ```Сайт GitHub``` → ```Settings``` → ```SSH and GPG keys``` → ```New SSH key```. Заполняем параметры SHH-ключа:

     * Тип ключа: ```Authentication Key``` 
  
     * Имя ключа: ```VM-server```

     * В поле ```Key``` добавляем содержимое SSH-ключа. Пример - ```ssh-ed25519 AAAA...Mu max.t95@bk.ru```

  * После добавления параметров SSH-ключа нажимаем ```Add SSH key```

<img src="./demo/5-ci-cd/5.png" width="100%">

### 5.6.Настройка файла SSH-конфигурации. Проверка подключения к GitHub

* Внесение GitHub в список известных хостов сервера:

```bash
ssh-keyscan -H github.com >> ~/.ssh/known_hosts
```

* Настройка конфигурации для SSH:

```bash
nano ~/.ssh/config
```

```
----- ~/.ssh/config -----
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
----- ~/.ssh/config -----
```

* Установка прав для файла SSH-конфигурации:

```bash
chmod 600 ~/.ssh/config
```

* Проверка взаимодействия с GitHub:

```bash
ssh -T git@github.com
# Если всё ок — увидим следующее сообщение:
# Hi <логин>! You've successfully authenticated ...
```

<img src="./demo/5-ci-cd/6.gif" width="100%">

### 5.7. Установка значений secret-параметров GitHub-репозитория для автодеплоя

* Ввод команды на сервере для получения ```SSH_PRIVATE_KEY```:

```bash
cat ~/.ssh/id_ed25519
```

```bash
# Копируем все вместе с комментариями BEGIN и END
-----BEGIN OPENSSH PRIVATE KEY----- 
b3...= 
-----END OPENSSH PRIVATE KEY-----
```

* Ввод secrets для автодеплоя GitHub-репозитория:

  * SSH_HOST: ```91.197.98.198``` (или другой IP-адрес сервера)

  * SSH_USER: ```myuser```

  * SSH_PRIVATE_KEY: результат команды ```cat ~/.ssh/id_ed25519``` на сервере

<img src="./demo/5-ci-cd/7-1.png" width="100%">

* После установки secrets проверяем функционал автодеплоя

<img src="./demo/5-ci-cd/7-2.gif" width="100%">
