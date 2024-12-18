# Учебное приложение автомойки
## <h2>Esatimates(Примерные показатели)</h2> <br>
 <table>
  <tr>
    <td>Регион</td>
    <td>Сахалинская область</td>
  </tr>
  <tr>
    <td>Численность региона</td>
    <td>500К человек</td>
  </tr>
  <tr>
    <td>DAU</td>
    <td>15% от 500К = 75К </td>
  </tr>
  <tr>
    <td>RPS</td>
    <td>75K/24/3600 ~= 1</td>
  </tr>
</table>

## 1. User stories
1.	Я, как экономный клиент, хочу знать, частоту мытья машины и общую стоимость, чтобы видеть статистику.
2.	Я, как клиент автомойки, хочу иметь возможность бронировать услугу мойки онлайн, чтобы сэкономить время.
3.	Я, как клиент, хочу иметь возможность оплачивать мойку онлайн, чтобы сэкономить время и избегать очередей.
4.	Я, как пользователь приложения, хочу иметь возможность связаться с администратором/мастером, чтобы задать волнующие меня вопросы.
5.	Я, как клиент хочу иметь возможность отслеживать процесс мойки своего автомобиля в режиме реального времени, чтобы быть уверенным в качестве оказанной услуги.
6.	Я, как клиент, хочу иметь возможность купить аксессуары для машины, чтобы не зазжать еще в другие места.
7.	Я, как клиент хочу иметь возможность получать уведомления о скидках и специальных предложениях от автомойки, чтобы знать, когда выгодно помыть авто.
8.	Я, как водитель крупногабаритной машины, хочу иметь возможность мойки в большом боксе, чтобы исключить вероятность того, что автомобиль не поместится в обычном боксе.
9. Я, как любитель животных, хочу, чтобы мне более тщательно помыли салон от следов животного, чтобы он был чистым после поездок с питомцем.
10. Я, как водитель внедорожника, хочу более тщательную очистку своей машины, чтобы мой автомобиль был в хорошем состоянии после путешествий по бездорожью.

## <h2>2. UseCase diagram</h2>
![image](https://github.com/user-attachments/assets/c71995bc-7c96-4243-9946-9ce6f9ef452e)


```
@startuml

left to right direction
actor "Client" as fc
rectangle "платилка" as PS
rectangle Автомойка {
usecase "UC 1 Управление профилем" as UC1
usecase "UC 1.1 Управление т/с" as UC2
usecase "UC 2.2 Выбор города" as UC3
usecase "UC 2.3 Выбор мойки" as UC4
usecase "UC 2.4 Выбор услуги" as UC5
usecase "UC 2.5 Выбор даты и времени" as UC6
usecase "UC 2 Запись на услугу" as UC7
usecase "UC 2.6 Выбор способа оплаты" as UC8
usecase "UC 2.7 Оплатить услугу" as UC9
usecase "UC 2.1 Отменить запись" as UC10

}
fc --> UC10
fc --> UC1
UC7 .> UC10 :(extend)
UC1 .> UC2
fc --> UC7
UC7 ..> UC3 :(include)
UC7 ..> UC4 :(include)
UC7 ..> UC5 :(include)
UC7 ..> UC6 :(include)
UC7 ..> UC8 :(include)
UC8 --> PS
UC7 ..> UC9 :(include)

```
### Сценарии использования

#### UC1 Управление профилем
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td>Пользователь открыл приложение.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Пользователь нажал "Зарегистрироваться" или "Авторизоваться"</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Пользователь успешно вошел в аккаунт.</td>
  </tr>
</table>
<br>
ЕСЛИ: Пользователь еще не создал аккаунт
<ol>
 <li>Пользователь открывает приложение и нажимает зарегистрироваться.</li>
 <li>Пользователь переходит на страницу регистрации.</li>
 <li>Пользователь вводит необходимые данные.</li>
 <li>Пользователь нажимает кнопку "Создать аккаунт".</li>
 <li>Система проверяет введенные данные на корректность</li>
</ol>
ЕСЛИ: Проверка пройдена
<ol>
 <li>Система создает новый аккаунт в базе данных.</li>
 <li>Система уведомляет пользователя об успешном создании аккаунта.</li>
</ol>
ИНАЧЕ:
<ol>
 <li>Система уведомляет пользователя об ошибке и предлагает исправить данные.</li>
</ol>
ЕСЛИ: Пользователь уже зарегистрирован:
<ol>
 <li>Пользователь открывает приложение и нажимает авторизоваться.</li>
 <li>Пользователь переходит на страницу авторизации.</li>
 <li>Пользователь вводит необходимые данные.</li>
 <li>Система проверяет введенные данные на корректность</li>
</ol>
ЕСЛИ: данные корректны
<ol>
 <li>Пользователь попадает на экран управления профилем.</li>
</ol>
ИНАЧЕ:
<ol>
 <li>Система уведомляет пользователя об ошибке и предлагает исправить данные.</li>
</ol>

#### UC2 Управление т/с
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь зарегистрирован и авторизован.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Пользователь хочет добавить новое транспортное средство.</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Транспортное средство успешно добавлено, и система отображает его в списке.</td>
  </tr>
</table>
<br>
<ol>
 <li>Пользователь открывает приложение и входит в свой профиль.</li>
 <li>Пользователь выбирает раздел "Мои автомобили".</li>
 <li>Пользователь нажимает на кнопку "Добавить транспортное средство".</li>
 <li>Пользователь вводит данные о новом т/с (марка, модель, VIN) и нажимает "Сохранить".</li>
 <li>Система проверяет введенные данные на корректность</li>
</ol>
ЕСЛИ: Автомобиль не зарегистрирован в системе:
<ol>
 <li>Система отображает сообщение о успешном добавлении т/с.</li>
</ol>
ИНАЧЕ:
<ol>
 <li>Система выводит сообщение об ошибке.</li>
 <li>Пользователь исправляет данные и повторяет попытку добавления.</li>
</ol>

#### UC3 Выбор города
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь зарегистрирован и авторизован. Начата запись на услуги.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Пользователь хочет выбрать город для услуги автомойки.</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Пользователь успешно выбирает город, и система отображает доступные мойки.</td>
  </tr>
</table>
<br>
<ol>
 <li>Пользователь открывает приложение.</li>
 <li>Пользователь видит экран выбора города.</li>
 <li>Пользователь выбирает город из предложенного списка.</li>
</ol>
ЕСЛИ: город пользователя найден:
<ol>
 <li>Система отображает доступные мойки в выбранном городе.</li>
</ol>
ИНАЧЕ:
<ol>
 <li>Система предлагает ввести название города вручную.</li>
</ol>

#### UC4 Выбор мойки
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь выбрал город.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Пользователь выбирает мойку.</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Пользователь выбирает мойку, и система отображает доступные услуги.</td>
  </tr>
</table>
<br>
<ol>
 <li>Пользователь выбирает город, как описано в UC3.</li>
 <li>Пользователь видит список доступных моек.</li>
 <li>Пользователь выбирает одну из моек.</li>
</ol>
ЕСЛИ: мойка доступна для записи:
<ol>
 <li>Система отображает доступные услуги для выбранной мойки.</li>
</ol>
ИНАЧЕ:
<ol>
 <li>Система уведомляет о недоступности мойки.</li>
 <li>Пользователь возвращается на предыдущий экран и выбирает другую мойку.</li>
</ol>

#### UC5 Выбор услуги
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь выбрал мойку</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Пользователь выбирает услугу.</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Пользователь выбирает услугу, и система отображает доступные даты и время.</td>
  </tr>
</table>
<br>
<ol>
 <li>Пользователь выбирает мойку, как описано в UC4.</li>
 <li>Пользователь видит список услуг.</li>
</ol>
ЕСЛИ: Услуга доступна:
<ol>
 <li>Пользователь выбирает услугу.</li>
 <li>Система отображает доступные даты и время для выбранной услуги.</li>
</ol>
ИНАЧЕ:
<ol>
 <li>Система уведомляет о недоступности услуги.</li>
 <li>Пользователь выбирает другую услугу из списка или ищет другую мойку.</li>
</ol>

#### UC6 Выбор даты и времени
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь выбрал услугу.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Пользователь выбирает дату и время.</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Пользователь выбирает дату и время, и система подтверждает выбор.</td>
  </tr>
</table>
<br>
<ol>
 <li>Пользователь выбирает услугу, как описано в UC5.</li>
 <li>Пользователь видит календарь с доступными датами и временем.</li>
 <li>Пользователь выбирает подходящую дату и время.</li>
</ol>
ЕСЛИ: слот свободен и подходит на данную услугу:
<ol>
 <li>Система подтверждает выбор даты и времени.</li>
</ol>
ИНАЧЕ:
<ol>
 <li>Система уведомляет о недоступности выбранного времени.</li>
 <li>Пользователь выбирает другую дату или время.</li>
</ol>

#### UC7 Запись на услугу
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь зарегистрирован и авторизован. Выбраны дата/время и услуги.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Пользователь записывается на услугу.</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Запись клиента на услугу успешно создана.</td>
  </tr>
</table>
<br>
<ol>
 <li>Пользователь выбирает дату и время, как описано в UC6.</li>
 <li>Пользователь нажимает на кнопку "Записаться".</li>
 <li>Система обрабатывает запрос на запись.</li>
</ol>
ЕСЛИ: запись прошла успешно:
<ol>
 <li>Система отображает сообщение о успешной записи на услугу.</li>
</ol>
ИНАЧЕ:
<ol>
 <li>Система выводит сообщение об ошибке.</li>
 <li>Пользователь повторяет попытку записи.</li>
</ol>

#### UC8 Выбор способа оплаты
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь зарегистрирован и авторизован. Имеет активную запись на автомойку.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Клиент выбрал услугу и дату/время записи и нажал на кнопку "Оплатить"</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Способ оплаты успешно выбран.</td>
  </tr>
</table>
<br>
<ol>
  <li>Клиент переходит в раздел "Выбор способа оплаты".</li>
  <li>Клиент выбирает один из доступных способов оплаты</li>
</ol>
  ЕСЛИ: выбранный способ оплаты доступен (нет технических проблем с платежной системой):
<ol>
  <li>Система отображает выбранный способ оплаты и его условия.</li>
  <li>Клиент подтверждает выбор способа оплаты.</li>
  <li>Система переходит к UC9</li>
</ol>
  ИНАЧЕ:
<ol>
  <li>Система уведомляет клиента о недоступности способа оплаты.</li>
  <li>Система предлагает клиенту выбрать другой способ оплаты или повторить попытку позже.</li>
  <li>Клиент может вернуться к выбору способа оплаты или обратиться в службу поддержки.</li>
</ol>

#### UC9 Оплатить услугу
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение, Платежная система</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь зарегистрирован и авторизован. Имеет активную запись на автомойку.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Клиент успешно выбрал способ оплаты.</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Запись клиента на автомойку оплачена.</td>
  </tr>
</table>
<br>
<ol>
  <li>Клиент переходит в раздел "Оплатить услугу".</li>
  <li>Клиент выбирает способ оплаты.</li>
  <li>Система перенаправляет клиента на платежную систему.</li>
  <li>Платежная система обрабатывает платеж.</li>
</ol>
  ЕСЛИ: оплата проходит успешно (на карте достаточно средств и платежная система его банка доступна):
<ol>
  <li>Система получает подтверждение оплаты от платежной системы</li>
  <li>Система обновляет статус записи клиента на "Оплачено".</li>
  <li>Система уведомляет клиента об успешной оплате.</li>
</ol>
  ИНАЧЕ: 
<ol>
  <li>Система уведомляет клиента об ошибке платежа.</li>
  <li>Система предлагает клиенту попробовать другой способ оплаты или исправить данные карты.</li>
  <li>Клиент может выбрать другой способ оплаты или повторить попытку позже.</li>
</ol>

#### UC10 Отменить запись
<table>
  <tr>
    <td>Участники</td>
    <td>Клиент, Приложение</td>
  </tr>
  <tr>
    <td>Предусловия</td>
    <td> Пользователь зарегистрирован и авторизован. Имеет активную запись на автомойку.</td>
  </tr>
  <tr>
    <td>Условия для срабатывания</td>
    <td>Клиент нажимает кнопку отменить свою запись на автомойку.</td>
  </tr>
  <tr>
    <td>Признак успешности</td>
    <td>Запись клиента на автомойку отменена.</td>
  </tr>
</table>
<br>
<ol>
  <li>Клиент переходит в раздел "Мои записи".</li>
  <li>Клиент выбирает запись, которую он хочет отменить.</li>
  <li>Клиент нажимает кнопку "Отменить запись".</li>
</ol>
  ЕСЛИ: клиент может отменить запись (запись еще не прошла и отмена доступна):
<ol>
  <li>Система подтверждает отмену записи.</li>
  <li>Система удаляет запись клиента из базы данных.</li>
  <li>Система уведомляет клиента об отмене записи.</li>
</ol>
  ИНАЧЕ:
<ol>
  <li>Система уведомляет клиента о невозможности отмены.</li>
  <li>Система предлагает клиенту обратиться в службу поддержки для решения проблемы.</li>
</ol>

## <h2>3. ERD</h2>
ERD диаграмма нужна для наглядного представления структуры баз данных и связи между ними. Подразделяется на логический и физический уровни. Логический уровень диаграммы позволяет показать структуру БД в общем виде; физический же более подробно описывает БД вместе с полями и типами значений.
#### Логический уровень:
![image](https://github.com/user-attachments/assets/dce84723-1789-44c9-941b-0b8c0d58f27b)


#### Физический уровень:
![image](https://github.com/user-attachments/assets/9b27ae5e-3ef5-455f-b65d-af2c798aac1e)


#### Связь "Один-к-одному":
- Заказ - Слоты. Один заказ может занимать только один слот;

#### Связь "Один-ко-многим":
- Клиенты - Авто. У пользователя может быть несколько автомобилей;
- Клиенты - Заказ. Один пользователь может совершать больше одного заказа;
- Заказ - Услуги. В одном заказе может быть оказано несколько разных услуг;
- Автомойки - Услуги. На одной автомойке оказываются разные виды услуг;
- Автомойки - Мастера. Несколько мастеров могут работать на одной автомойке;
- Автомойки - Расписание. У разных автомоек может быть разный режим работы;
- Мастера - Слоты. У мастера скорее всего будет несколько слотов для клиентов в течение рабочего дня;
- Расписание - Слоты. Рабочее время автомойки разделено по слотам.

## 4. C4 model
### C1 - System Context
![image](https://github.com/user-attachments/assets/cc2e2f8b-06e3-4b8f-9303-5be7e35c8dd2)

### C2 - Containers
![image](https://github.com/user-attachments/assets/b3ff8dc0-3aa8-432c-b65b-852f5980ed96)

## 5. Sequence diagram
### Новый вход
![image](https://github.com/user-attachments/assets/fb33f9bb-9943-4f51-8dd5-bb7c15e16549)
```
autonumber 

alt Аккаунт не существует
Пользователь -> Система: Создать аккаунт
Система -> База данных: Передать данные пользователя
База данных->База данных:Запись данных в БД
База данных --> Система: Подтверждение сохранения
Система --> Пользователь: Успешное создание аккаунта
else Аккаунт уже существует
Пользователь -> Система: Ввести данные аккаунта
База данных->База данных:Проверка данных из БД
alt Данные корректны
База данных --> Система: Подтверждение данных
Система --> Пользователь: Успешный вход в аккаунт
else Данные некорректны
База данных --> Система: Сообщение об ошибке
Система --> Пользователь:Предложение восстановить пароль
end

end

```
### Последующий вход в аккаунт
![image](https://github.com/user-attachments/assets/f642fb30-316f-4d70-b765-790a7be74f36)

```
autonumber 

alt Автомобиля нет в БД
Пользователь -> Система: Добавить автомобиль
Система -> База данных: Передать данные автомобиля
База данных->База данных:Запись данных в БД
База данных --> Система: Подтверждение сохранения
Система --> Пользователь: Успешное добавление автомобиля
else Автомобиль уже есть в БД
База данных->База данных:Чтение данных из БД
База данных --> Система: Сообщение об ошибке

Система --> Пользователь:Предложение проверить данные
end
```
### Запись на мойку
![Untitled](https://github.com/user-attachments/assets/0e4efdbd-180b-4a7a-a387-d4fd67497a5a)

```
Пользователь -> Система: Записаться на мойку
Система -> База данных: Запрос доступных автомоек
База данных->База данных:Чтение данных из БД
База данных --> Система: Список автомоек
Система --> Пользователь: Показать список автомоек

Пользователь -> Система: Выбрать автомойку
Система -> База данных: Запрос доступных дат и времени
База данных->База данных:Чтение данных из БД
База данных --> Система: Доступные даты и время
Система --> Пользователь: Показать доступные даты и время

Пользователь -> Система: Выбрать дату и время
Пользователь -> Система: Выбрать услуги
Система -> База данных: Сохранить запись на мойку
База данных->База данных:Обновление данных в БД
База данных --> Система: Подтверждение сохранения
Система --> Пользователь: Успешная запись на мойку

Пользователь -> Система: Оплатить услуги
Система -> Платежная система: Запрос на оплату
Платежная система --> Система: Результат оплаты (успех/неудача)
alt Успешная оплата
Система -> База данных: Сохранить статус оплаты
База данных --> Система: Подтверждение сохранения
Система -> Система уведомлений: Отправить уведомление о записи
Система уведомлений --> Пользователь: Уведомление о подтверждении записи
else Ошибка
База данных --> Система: Сообщение об ошибке
Система --> Пользователь: Предложение проверить данные
```
## 6.* OpenAPI
Я создала небольшое учебное API для приложения автомойки. В нем показаны основные функции:
- CRUDL пользователя
- CRUDL авто
- CRUDL автомоек
- CRUDL заказов
- CRUDL слотов <br>
<br>
Были реализованы функции оплаты заказа и записи на незанятый слот.
Для теста API я развернула сервер на Node.js с обработчиками методов. Для этого были использованы библиотеки bodyParser и swaggerUi.
