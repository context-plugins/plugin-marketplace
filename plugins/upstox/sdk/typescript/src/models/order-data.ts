import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exchangeOpenApiDefinitionOrderApiSchema,
  type ExchangeOpenApiDefinitionOrderApi,
} from "./exchange-open-api-definition-order-api.js";
import { orderType1Schema, type OrderType1 } from "./order-type1.js";
import { product1Schema, type Product1 } from "./product1.js";
import { transactionType1Schema, type TransactionType1 } from "./transaction-type1.js";
import { validity1Schema, type Validity1 } from "./validity1.js";

export type OrderData = {
  /** Exchange to which the order is associated */
  exchange?: ExchangeOpenApiDefinitionOrderApi;
  /** Price at which the order was placed */
  price?: number;
  /** Shows if the order was either Intraday, Delivery, CoverOrder or OneCancelsOther */
  product?: Product1;
  /** Quantity with which the order was placed */
  quantity?: number;
  /**
   * Indicates the current status of the order. Valid order status’ are outlined in the table below
   */
  status?: string;
  /** Tag to uniquely identify an order */
  tag?: string;
  /** Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order) */
  validity?: Validity1;
  /** Average price at which the qty got traded */
  averagePrice?: number;
  /** The quantity that should be disclosed in the market depth */
  disclosedQuantity?: number;
  /** Unique order ID assigned by the exchange for the order placed */
  exchangeOrderId?: string;
  /** User readable time at which the order was placed or updated */
  exchangeTimestamp?: string;
  /** Identifier issued by Upstox used for subscribing to live market quotes */
  instrumentToken?: string;
  /** Signifies if the order is an After Market Order */
  isAmo?: boolean;
  /** Indicates the reason when any order is rejected, not modified or cancelled */
  statusMessage?: string;
  /** Unique order ID assigned internally for the order placed */
  orderId?: string;
  /** Apart from 1st order it shows the count of how many requests were sent */
  orderRequestId?: string;
  /**
   * Type of order. It can be one of the following MARKET refers to market order<br>LIMIT refers to
   * Limit Order<br>SL refers to Stop Loss Limit<br>SL-M refers to Stop loss market
   */
  orderType?: OrderType1;
  /**
   * In case the order is part of the second or third leg of a CO or OCO, the parent order ID is
   * indicated here
   */
  parentOrderId?: string;
  /**
   * Shows the trading symbol of the instrument
   *
   * @deprecated
   */
  tradingsymbol?: string;
  /** Shows the trading symbol of the instrument */
  tradingSymbol?: string;
  /** User readable timestamp at which the order was placed */
  orderTimestamp?: string;
  /** The total quantity traded from this particular order */
  filledQuantity?: number;
  /** Indicates whether the order was a buy or sell order */
  transactionType?: TransactionType1;
  /** If the order was a stop loss order then the trigger price set is mentioned here */
  triggerPrice?: number;
  /** Uniquely identifies the user */
  placedBy?: string;
  /** Order complexity */
  variety?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderDataSchema: Schema<OrderData> = s.object<OrderData>(
  {
    exchange: s.optional(s.lazy(() => exchangeOpenApiDefinitionOrderApiSchema)),
    price: s.optional(s.float64()),
    product: s.optional(s.lazy(() => product1Schema)),
    quantity: s.optional(s.int()),
    status: s.optional(s.string()),
    tag: s.optional(s.string()),
    validity: s.optional(s.lazy(() => validity1Schema)),
    averagePrice: s.optional(s.float64()),
    disclosedQuantity: s.optional(s.int()),
    exchangeOrderId: s.optional(s.string()),
    exchangeTimestamp: s.optional(s.string()),
    instrumentToken: s.optional(s.string()),
    isAmo: s.optional(s.boolean()),
    statusMessage: s.optional(s.string()),
    orderId: s.optional(s.string()),
    orderRequestId: s.optional(s.string()),
    orderType: s.optional(s.lazy(() => orderType1Schema)),
    parentOrderId: s.optional(s.string()),
    tradingsymbol: s.optional(s.string()),
    tradingSymbol: s.optional(s.string()),
    orderTimestamp: s.optional(s.string()),
    filledQuantity: s.optional(s.int()),
    transactionType: s.optional(s.lazy(() => transactionType1Schema)),
    triggerPrice: s.optional(s.float64()),
    placedBy: s.optional(s.string()),
    variety: s.optional(s.string()),
    _keysMap: {
      averagePrice: "average_price",
      disclosedQuantity: "disclosed_quantity",
      exchangeOrderId: "exchange_order_id",
      exchangeTimestamp: "exchange_timestamp",
      instrumentToken: "instrument_token",
      isAmo: "is_amo",
      statusMessage: "status_message",
      orderId: "order_id",
      orderRequestId: "order_request_id",
      orderType: "order_type",
      parentOrderId: "parent_order_id",
      tradingSymbol: "trading_symbol",
      orderTimestamp: "order_timestamp",
      filledQuantity: "filled_quantity",
      transactionType: "transaction_type",
      triggerPrice: "trigger_price",
      placedBy: "placed_by",
    },
  },
  { additionalProperties: s.json() },
);
