import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.scss']
})
export class ReturnsComponent implements OnInit {
  public orders: any = [
    {
      createTime: '2022-01-13 16:33:19',
      currencyName: 'Sum',
      deviceInfo: {
        appVersion: '537.36 (KHTML, like Gecko) Chrome',
        brandName: 'Mozilla',
        device: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit',
        deviceType: 'BROWSER'
      },
      directionType: 'Forward',
      dollarRate: 0,
      gateExpressIds: '70325205953535',
      identifier: 'c63fb133-765f-42c4-91f2-36dd89523afa',
      lastUpdateTime: [2022, 1, 13, 16, 33, 19, 167149000],
      orderItems: [
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5a31c5c1-2569-4490-8e46-9a100d8b59c6',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        }
      ],
      orderStatus: 'FinishedSuccessOrder',
      paymentType: 'Payme',
      totalCost: 131620,
      totalDollarCost: 0,
      totalPoundCost: 0,
      totalRefundPound: null,
      transactionType: null,
      username: 'bek3d89@gmail.com',
      withInsurance: false,
      returnCost: '230000'
    },
    {
      createTime: '2021-01-13 16:33:19',
      currencyName: 'Sum',
      deviceInfo: {
        appVersion: '537.36 (KHTML, like Gecko) Chrome',
        brandName: 'Mozilla',
        device: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit',
        deviceType: 'BROWSER'
      },
      directionType: 'Both',
      dollarRate: 0,
      gateExpressIds: '70323205953535',
      identifier: '7e71aee8-7578-414d-93e3-b3716def31ce',
      lastUpdateTime: [2022, 1, 13, 16, 33, 19, 167149000],
      orderItems: [
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5e9d7c1f-03b1-4772-a3c7-c2f09d96e530',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        },
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5e9d7c1f-03b1-4772-a3c7-c2f09d96e530',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        }
      ],
      orderStatus: 'FinishedSuccessOrder',
      paymentType: 'Payme',
      totalCost: 262620,
      totalDollarCost: 0,
      totalPoundCost: 0,
      totalRefundPound: null,
      transactionType: null,
      username: 'bek3d89@gmail.com',
      withInsurance: false,
      returnCost: '230000'
    },
    {
      createTime: '2022-01-13 16:33:19',
      currencyName: 'Sum',
      deviceInfo: {
        appVersion: '537.36 (KHTML, like Gecko) Chrome',
        brandName: 'Mozilla',
        device: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit',
        deviceType: 'BROWSER'
      },
      directionType: 'Forward',
      dollarRate: 0,
      gateExpressIds: '70325205953535',
      identifier: 'c63fb133-765f-42c4-91f2-36dd89523afa',
      lastUpdateTime: [2022, 1, 13, 16, 33, 19, 167149000],
      orderItems: [
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5a31c5c1-2569-4490-8e46-9a100d8b59c6',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        }
      ],
      orderStatus: 'FinishedSuccessOrder',
      paymentType: 'Payme',
      totalCost: 131620,
      totalDollarCost: 0,
      totalPoundCost: 0,
      totalRefundPound: null,
      transactionType: null,
      username: 'bek3d89@gmail.com',
      withInsurance: false,
      returnCost: '230000'
    },
    {
      createTime: '2021-01-13 16:33:19',
      currencyName: 'Sum',
      deviceInfo: {
        appVersion: '537.36 (KHTML, like Gecko) Chrome',
        brandName: 'Mozilla',
        device: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit',
        deviceType: 'BROWSER'
      },
      directionType: 'Both',
      dollarRate: 0,
      gateExpressIds: '70323205953535',
      identifier: '7e71aee8-7578-414d-93e3-b3716def31ce',
      lastUpdateTime: [2022, 1, 13, 16, 33, 19, 167149000],
      orderItems: [
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5e9d7c1f-03b1-4772-a3c7-c2f09d96e530',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        },
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5e9d7c1f-03b1-4772-a3c7-c2f09d96e530',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        }
      ],
      orderStatus: 'FinishedSuccessOrder',
      paymentType: 'Payme',
      totalCost: 262620,
      totalDollarCost: 0,
      totalPoundCost: 0,
      totalRefundPound: null,
      transactionType: null,
      username: 'bek3d89@gmail.com',
      withInsurance: false,
      returnCost: '230000'
    },
    {
      createTime: '2022-01-13 16:33:19',
      currencyName: 'Sum',
      deviceInfo: {
        appVersion: '537.36 (KHTML, like Gecko) Chrome',
        brandName: 'Mozilla',
        device: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit',
        deviceType: 'BROWSER'
      },
      directionType: 'Forward',
      dollarRate: 0,
      gateExpressIds: '70325205953535',
      identifier: 'c63fb133-765f-42c4-91f2-36dd89523afa',
      lastUpdateTime: [2022, 1, 13, 16, 33, 19, 167149000],
      orderItems: [
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5a31c5c1-2569-4490-8e46-9a100d8b59c6',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        }
      ],
      orderStatus: 'FinishedSuccessOrder',
      paymentType: 'Payme',
      totalCost: 131620,
      totalDollarCost: 0,
      totalPoundCost: 0,
      totalRefundPound: null,
      transactionType: null,
      username: 'bek3d89@gmail.com',
      withInsurance: false,
      returnCost: '230000'
    },
    {
      createTime: '2021-01-13 16:33:19',
      currencyName: 'Sum',
      deviceInfo: {
        appVersion: '537.36 (KHTML, like Gecko) Chrome',
        brandName: 'Mozilla',
        device: '5.0 (Windows NT 10.0; Win64; x64) AppleWebKit',
        deviceType: 'BROWSER'
      },
      directionType: 'Both',
      dollarRate: 0,
      gateExpressIds: '70323205953535',
      identifier: '7e71aee8-7578-414d-93e3-b3716def31ce',
      lastUpdateTime: [2022, 1, 13, 16, 33, 19, 167149000],
      orderItems: [
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5e9d7c1f-03b1-4772-a3c7-c2f09d96e530',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        },
        {
          additionalInfo: '(Ж.Д.УЗБЕКИСТАНА) ТАШКЕНТ ЮЖНЫЙ-ШУРЧИ, [13.01.2022-14.01.2022]',
          adultPass: 1,
          directionType: 'Forward',
          exspOrderID: '1303584',
          gateExpressId: '70325205953535',
          identifier: '5e9d7c1f-03b1-4772-a3c7-c2f09d96e530',
          passangers: 1,
          payDocId: null,
          totalCost: 131620,
          withoutRevengePass: 0
        }
      ],
      orderStatus: 'FinishedSuccessOrder',
      paymentType: 'Payme',
      totalCost: 262620,
      totalDollarCost: 0,
      totalPoundCost: 0,
      totalRefundPound: null,
      transactionType: null,
      username: 'bek3d89@gmail.com',
      withInsurance: false,
      returnCost: '230000'
    }
  ]

  constructor() { }

  ngOnInit(): void {}
}
