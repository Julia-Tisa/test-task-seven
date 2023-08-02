# установка:

```
yarn install 
```

все необходимые библиотеки должны установиться

# запуск

```
npx expo start --web
```

# задача

Разработать FieldTime - компонент ввода времени
Допускается, 2 варианта решения задачи:

1) Найти готовое решение и использовать FieldTime как обёртку над ним.
   Условие: совместимость с Android, iOS, web
2) Использовать стандартный для react-native TextInput,
   и при помощи регулярных выражений приводить значение к формату HH:MM

Интерфейс компонента описан в FieldTime

Компонент должен принимать время или null

При снятии фокуса вызывать onChange,
передавать в него строку формата HH:MM (для TextInput это базовое событие onBlur)

Желательно сделать кнопки управления при помощи иконок FontAwesome +/-1 час

# документация

https://reactnative.dev/

https://docs.expo.dev/

https://tailwindcss.ru/

https://fontawesome.com/docs/web/use-with/react-native

# приемка задания

Выполненное задание залить на отдельную ветку. Где имя ветки - фамилия исполнителя