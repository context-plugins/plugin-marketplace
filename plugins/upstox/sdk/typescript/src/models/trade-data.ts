import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exchangeOpenApiDefinitionOrderApiSchema,
  type ExchangeOpenApiDefinitionOrderApi,
} from "./exchange-open-api-definition-order-api.js";
import { orderType1Schema, type OrderType1 } from "./order-type1.js";
import { product4Schema, type Product4 } from "./product4.js";
import { transactionType1Schema, type TransactionType1 } from "./transaction-type1.js";

export type TradeData = {
  /** Exchange to which the order is associated */
  exchange?: ExchangeOpenApiDefinitionOrderApi;
  /** Shows if the order was either Intraday, Delivery, CO or OCO */
  product?: Product4;
  /**
   * Shows the trading symbol which could be a combination of symbol name, instrument, expiry date
   * etc
   *
   * @deprecated
   */
  tradingsymbol?: string;
  /**
   * Shows the trading symbol which could be a combination of symbol name, instrument, expiry date
   * etc
   */
  tradingSymbol?: string;
  /** Identifier issued by Upstox used for subscribing to live market quotes */
  instrumentToken?: string;
  /**
   * Type of order. It can be one of the following MARKET refers to market order<br>LIMIT refers to
   * Limit Order<br>SL refers to Stop Loss Limit<br>SL-M refers to Stop loss market
   */
  orderType?: OrderType1;
  /** Indicates whether the order was a buy or sell order */
  transactionType?: TransactionType1;
  /** The total quantity traded from this particular order */
  quantity?: number;
  /** Unique order ID assigned by the exchange for the order placed */
  exchangeOrderId?: string;
  /** Unique order ID assigned internally for the order placed */
  orderId?: string;
  /** User readable time at when the trade occurred */
  exchangeTimestamp?: string;
  /** Price at which the traded quantity is traded */
  averagePrice?: number;
  /** Trade ID generated from exchange towards traded transaction */
  tradeId?: string;
  /** The order reference ID for which the order must be modified */
  orderRefId?: string;
  /** User readable timestamp at which the order was placed */
  orderTimestamp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tradeDataSchema: Schema<TradeData> = s.object<TradeData>(
  {
    exchange: s.optional(s.lazy(() => exchangeOpenApiDefinitionOrderApiSchema)),
    product: s.optional(s.lazy(() => product4Schema)),
    tradingsymbol: s.optional(s.string()),
    tradingSymbol: s.optional(s.string()),
    instrumentToken: s.optional(s.string()),
    orderType: s.optional(s.lazy(() => orderType1Schema)),
    transactionType: s.optional(s.lazy(() => transactionType1Schema)),
    quantity: s.optional(s.int()),
    exchangeOrderId: s.optional(s.string()),
    orderId: s.optional(s.string()),
    exchangeTimestamp: s.optional(s.string()),
    averagePrice: s.optional(s.float64()),
    tradeId: s.optional(s.string()),
    orderRefId: s.optional(s.string()),
    orderTimestamp: s.optional(s.string()),
    _keysMap: {
      tradingSymbol: "trading_symbol",
      instrumentToken: "instrument_token",
      orderType: "order_type",
      transactionType: "transaction_type",
      exchangeOrderId: "exchange_order_id",
      orderId: "order_id",
      exchangeTimestamp: "exchange_timestamp",
      averagePrice: "average_price",
      tradeId: "trade_id",
      orderRefId: "order_ref_id",
      orderTimestamp: "order_timestamp",
    },
  },
  { additionalProperties: s.json() },
);
