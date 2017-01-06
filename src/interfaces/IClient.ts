import { IBaseModel } from './IBaseModel'
import { IAddress } from './IAddress'
import { IContact } from './IContact'

export interface IClient extends IBaseModel {
  companyName: string, // Razão social
  tradingName: string, // Nome Fantasia
  cnpj: 'string'
  address: IAddress,
  contact: IContact,
  market: MarketType,
  shareDangerousPoints: boolean
}

export enum MarketType {
  TRANSPORT_COMPANY,
  INSURER,
  OTHERS
}

