# IIS-1
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
# User story

Я, как экономный клиент, хочу знать, частоту мытья машины и общую стоимость, чтобы видеть статистику

Я, как пользователь приложения, хочу иметь возможность позвонить администратору/мастеру, чтобы консультироваться

Я, как клиент, хочу иметь возможность купить аксессуары для машины, чтобы не зазжать еще в другие места
