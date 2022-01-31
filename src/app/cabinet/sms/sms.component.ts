import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {
  public smsList: any = [
    {
      createTime: "2022-01-13 20:44:14",
      entityId: "105b8e84-2f28-4fa1-95d5-d2097eba4079",
      entityType: "ORDER_ENTITY",
      expressId: "71425205964691",
      identifier: "9f2e1dbf-da37-4e9e-a6ed-c8c7f9e9785e",
      lastUpdateTime: "2022-01-13 20:44:14",
      messageEn: "",
      messageIds: "xnj676734",
      messageRu: "Уважаемый пассажир, Вы приобрели электронный проездной документ №71425205964691 на поезд №759ФА по маршруту «КАРШИ-ТАШКЕНТ ПАСС ЦЕНТР.» 09 вагон 001 место, отправлением25.02.2022г. в 16:46 Электронный проездной документ хранится в разделе «Мои новые заказы». Регистрация пассажиров заканчивается за 30 минут до отправления поезда",
      messageUz: "Hurmatli yo‘lovchi, Siz 25.02.2022yil soat 16:46da jo‘nab ketadigan “КАРШИ-ТАШКЕНТ ПАСС ЦЕНТР.” yo‘nalishidagi, №759ФА poyezdining 09vagon, 001-joy(lar)ga  №71425205964691 raqamli elektron yo‘l hujjati xarid qildingiz. Elektron yo‘l hujjati “Yangi buyurtmalarim” bo‘limida saqlanadi. Ro‘yxatdan o`tish poyezd jo‘nashiga 30 daqiqa qolganda tugaydi.",
      phone: "998915265787",
      smsState: "PENDING",
      timeToSend: "2022-02-25 14:46:00"
    },
    {
      createTime: "2022-01-13 20:44:14",
      entityId: "105b8e84-2f28-4fa1-95d5-d2097eba4079",
      entityType: "ORDER_ENTITY",
      expressId: "71425205964691",
      identifier: "9f2e1dbf-da37-4e9e-a6ed-c8c7f9e9785e",
      lastUpdateTime: "2022-01-13 20:44:14",
      messageEn: "",
      messageIds: "xnj676734",
      messageRu: "Уважаемый пассажир, Вы приобрели электронный проездной документ №71425205964691 на поезд №759ФА по маршруту «КАРШИ-ТАШКЕНТ ПАСС ЦЕНТР.» 09 вагон 001 место, отправлением25.02.2022г. в 16:46 Электронный проездной документ хранится в разделе «Мои новые заказы». Регистрация пассажиров заканчивается за 30 минут до отправления поезда",
      messageUz: "Hurmatli yo‘lovchi, Siz 25.02.2022yil soat 16:46da jo‘nab ketadigan “КАРШИ-ТАШКЕНТ ПАСС ЦЕНТР.” yo‘nalishidagi, №759ФА poyezdining 09vagon, 001-joy(lar)ga  №71425205964691 raqamli elektron yo‘l hujjati xarid qildingiz. Elektron yo‘l hujjati “Yangi buyurtmalarim” bo‘limida saqlanadi. Ro‘yxatdan o`tish poyezd jo‘nashiga 30 daqiqa qolganda tugaydi.",
      phone: "998915265787",
      smsState: "SENT",
      timeToSend: "2022-02-25 14:46:00"
    },
    {
      createTime: "2022-01-13 20:44:14",
      entityId: "105b8e84-2f28-4fa1-95d5-d2097eba4079",
      entityType: "ORDER_ENTITY",
      expressId: "71425205964691",
      identifier: "9f2e1dbf-da37-4e9e-a6ed-c8c7f9e9785e",
      lastUpdateTime: "2022-01-13 20:44:14",
      messageEn: "",
      messageIds: "xnj676734",
      messageRu: "Уважаемый пассажир, Вы приобрели электронный проездной документ №71425205964691 на поезд №759ФА по маршруту «КАРШИ-ТАШКЕНТ ПАСС ЦЕНТР.» 09 вагон 001 место, отправлением25.02.2022г. в 16:46 Электронный проездной документ хранится в разделе «Мои новые заказы». Регистрация пассажиров заканчивается за 30 минут до отправления поезда",
      messageUz: "Hurmatli yo‘lovchi, Siz 25.02.2022yil soat 16:46da jo‘nab ketadigan “КАРШИ-ТАШКЕНТ ПАСС ЦЕНТР.” yo‘nalishidagi, №759ФА poyezdining 09vagon, 001-joy(lar)ga  №71425205964691 raqamli elektron yo‘l hujjati xarid qildingiz. Elektron yo‘l hujjati “Yangi buyurtmalarim” bo‘limida saqlanadi. Ro‘yxatdan o`tish poyezd jo‘nashiga 30 daqiqa qolganda tugaydi.",
      phone: "998915265787",
      smsState: "CANCELLED",
      timeToSend: "2022-02-25 14:46:00"
    },
    {
      createTime: "2022-01-13 20:44:14",
      entityId: "105b8e84-2f28-4fa1-95d5-d2097eba4079",
      entityType: "ORDER_ENTITY",
      expressId: "71425205964691",
      identifier: "9f2e1dbf-da37-4e9e-a6ed-c8c7f9e9785e",
      lastUpdateTime: "2022-01-13 20:44:14",
      messageEn: "",
      messageIds: "xnj676734",
      messageRu: "Уважаемый пассажир, Вы приобрели электронный проездной документ №71425205964691 на поезд №759ФА по маршруту «КАРШИ-ТАШКЕНТ ПАСС ЦЕНТР.» 09 вагон 001 место, отправлением25.02.2022г. в 16:46 Электронный проездной документ хранится в разделе «Мои новые заказы». Регистрация пассажиров заканчивается за 30 минут до отправления поезда",
      messageUz: "Hurmatli yo‘lovchi, Siz 25.02.2022yil soat 16:46da jo‘nab ketadigan “КАРШИ-ТАШКЕНТ ПАСС ЦЕНТР.” yo‘nalishidagi, №759ФА poyezdining 09vagon, 001-joy(lar)ga  №71425205964691 raqamli elektron yo‘l hujjati xarid qildingiz. Elektron yo‘l hujjati “Yangi buyurtmalarim” bo‘limida saqlanadi. Ro‘yxatdan o`tish poyezd jo‘nashiga 30 daqiqa qolganda tugaydi.",
      phone: "998915265787",
      smsState: "UNKNOWN",
      timeToSend: "2022-02-25 14:46:00"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
