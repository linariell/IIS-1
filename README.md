# Учебное приложение автомойки
## <h2>Esatimates(Примерные показатели)</h2> <br>
Регион: Сахалинская область <br>
Численность населения: 500.000 человек. <br>
DAU: 15% от 500.000 = 75.000 человек. <br>
RPS: 75.000/24/3600 ~ 1 чел./сек. <br>

## User story
1.	Я, как экономный клиент, хочу знать, частоту мытья машины и общую стоимость, чтобы видеть статистику.
2.	Я, как клиент автомойки, хочу иметь возможность бронировать услугу мойки онлайн, чтобы сэкономить время.
3.	Я, как клиент, хочу иметь возможность оплачивать мойку онлайн, чтобы сэкономить время и избегать очередей.
4.	Я, как пользователь приложения, хочу иметь возможность позвонить администратору/мастеру, чтобы задать волнующие меня вопросы.
5.	Я, как клиент хочу иметь возможность отслеживать процесс мойки своего автомобиля в режиме реального времени, чтобы быть уверенным в качестве оказанной услуги.
6.	Я, как клиент, хочу иметь возможность купить аксессуары для машины, чтобы не зазжать еще в другие места.
7.	Я, как клиент хочу иметь возможность получать уведомления о скидках и специальных предложениях от автомойки, чтобы знать, когда выгодно помыть авто.
8.	Я, как водитель крупногабаритной машины, хочу иметь возможность мойки в большом боксе, чтобы исключить вероятность того, что автомобиль не поместится в обычном боксе.
9. Я, как любитель животных, хочу, чтобы мне сделали химчистку салона и пропылесосили его от шерсти, чтобы он был чистым после поездок с питомцем.
10. Я, как водитель внедорожника, хочу более тщательную очистку своей машины, чтобы мой автомобиль был в хорошем состоянии после путешествий по бездорожью.

## <h2>UseCase diagram</h2>
![image](https://github.com/user-attachments/assets/7522bf76-427d-4145-8325-c18877db0428)
```
@startuml
left to right direction
actor "Client" as fc
actor "платилка" as PS
rectangle Автомойка {
usecase "Управление профилем" as UC1
usecase "Управление т/с" as UC2

usecase "Выбор города" as UC3
usecase "Выбор мойки" as UC4
usecase "Выбор услуги" as UC5
usecase "Выбор даты и времени" as UC6
usecase "Выбор способа оплаты" as UC7
usecase "Оплатить услугу" as UC8
usecase "Отменить запись" as UC9
}
fc --> UC1
fc --> UC2
fc --> UC3
fc --> UC4
fc --> UC5
fc --> UC6
fc --> UC7
fc --> UC8
fc --> UC9
UC8 --> PS
```
## Сценарии использования

### UC1 Управление профилем

### UC2 Управление т/с

### UC3 Выбор города

### UC4 Выбор услуги

### UC5 Управление профилем

### UC6 Управление профилем

### UC7 Управление профилем

### UC8 Управление профилем

### UC9 Управление профилем

## <h2>ERD</h2>
![image](https://github.com/user-attachments/assets/77dac427-ff1c-4b1d-a015-9514a4288469)

- У клиента может быть несколько авто. Связь "Один-ко-многим"
- Автомойки предоставляют много услуг. Связь "Один-ко-многим"
- На одной автомойке может быть много мастеров. Связь "Один-ко-многим"

## Sequence diagram
## OpenAPI

