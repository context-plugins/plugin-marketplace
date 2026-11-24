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

/** Response data for order details */
export type OrderBookData2 = {
  /** Exchange to which the order is associated */
  exchange?: ExchangeOpenApiDefinitionOrderApi;
  /** Shows if the order was either Intraday, Delivery, CoverOrder or OneCancelsOther */
  product?: Product1;
  /** Price at which the order was placed */
  price?: number;
  /** Quantity with which the order was placed */
  quantity?: number;
  /**
   * Indicates the current status of the order. Valid order status’ are outlined in the table below
   */
  status?: string;
  guid?: string;
  /** Tag to uniquely identify an order */
  tag?: string;
  /** Identifier issued by Upstox used for subscribing to live market quotes */
  instrumentToken?: string;
  /** Uniquely identifies the user */
  placedBy?: string;
  /**
   * Shows the trading symbol of the instrument
   *
   * @deprecated
   */
  tradingsymbol?: string;
  /** Shows the trading symbol of the instrument */
  tradingSymbol?: string;
  /**
   * Type of order. It can be one of the following MARKET refers to market order<br>LIMIT refers to
   * Limit Order<br>SL refers to Stop Loss Limit<br>SL-M refers to Stop loss market
   */
  orderType?: OrderType1;
  /** Order validity (DAY- Day and IOC- Immediate or Cancel (IOC) order) */
  validity?: Validity1;
  /** If the order was a stop loss order then the trigger price set is mentioned here */
  triggerPrice?: number;
  /** The quantity that should be disclosed in the market depth */
  disclosedQuantity?: number;
  /** Indicates whether the order was a buy or sell order */
  transactionType?: TransactionType1;
  /** Average price at which the qty got traded */
  averagePrice?: number;
  /** The total quantity traded from this particular order */
  filledQuantity?: number;
  /** Pending quantity to be filled */
  pendingQuantity?: number;
  /** Indicates the reason when any order is rejected, not modified or cancelled */
  statusMessage?: string;
  /** Description of the order's status as received from RMS */
  statusMessageRaw?: string;
  /** Unique order ID assigned by the exchange for the order placed */
  exchangeOrderId?: string;
  /**
   * In case the order is part of the second or third leg of a CO or OCO, the parent order ID is
   * indicated here
   */
  parentOrderId?: string;
  /** Unique order ID assigned internally for the order placed */
  orderId?: string;
  /** Order complexity */
  variety?: string;
  /** User readable timestamp at which the order was placed */
  orderTimestamp?: string;
  /** User readable time at which the order was placed or updated */
  exchangeTimestamp?: string;
  /** Signifies if the order is an After Market Order */
  isAmo?: boolean;
  /** Apart from 1st order it shows the count of how many requests were sent */
  orderRequestId?: string;
  /** The order reference ID for which the order must be modified */
  orderRefId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderBookData2Schema: Schema<OrderBookData2> = s.object<OrderBookData2>(
  {
    exchange: s.optional(s.lazy(() => exchangeOpenApiDefinitionOrderApiSchema)),
    product: s.optional(s.lazy(() => product1Schema)),
    price: s.optional(s.float64()),
    quantity: s.optional(s.int()),
    status: s.optional(s.string()),
    guid: s.optional(s.string()),
    tag: s.optional(s.string()),
    instrumentToken: s.optional(s.string()),
    placedBy: s.optional(s.string()),
    tradingsymbol: s.optional(s.string()),
    tradingSymbol: s.optional(s.string()),
    orderType: s.optional(s.lazy(() => orderType1Schema)),
    validity: s.optional(s.lazy(() => validity1Schema)),
    triggerPrice: s.optional(s.float64()),
    disclosedQuantity: s.optional(s.int()),
    transactionType: s.optional(s.lazy(() => transactionType1Schema)),
    averagePrice: s.optional(s.float64()),
    filledQuantity: s.optional(s.int()),
    pendingQuantity: s.optional(s.int()),
    statusMessage: s.optional(s.string()),
    statusMessageRaw: s.optional(s.string()),
    exchangeOrderId: s.optional(s.string()),
    parentOrderId: s.optional(s.string()),
    orderId: s.optional(s.string()),
    variety: s.optional(s.string()),
    orderTimestamp: s.optional(s.string()),
    exchangeTimestamp: s.optional(s.string()),
    isAmo: s.optional(s.boolean()),
    orderRequestId: s.optional(s.string()),
    orderRefId: s.optional(s.string()),
    _keysMap: {
      instrumentToken: "instrument_token",
      placedBy: "placed_by",
      tradingSymbol: "trading_symbol",
      orderType: "order_type",
      triggerPrice: "trigger_price",
      disclosedQuantity: "disclosed_quantity",
      transactionType: "transaction_type",
      averagePrice: "average_price",
      filledQuantity: "filled_quantity",
      pendingQuantity: "pending_quantity",
      statusMessage: "status_message",
      statusMessageRaw: "status_message_raw",
      exchangeOrderId: "exchange_order_id",
      parentOrderId: "parent_order_id",
      orderId: "order_id",
      orderTimestamp: "order_timestamp",
      exchangeTimestamp: "exchange_timestamp",
      isAmo: "is_amo",
      orderRequestId: "order_request_id",
      orderRefId: "order_ref_id",
    },
  },
  { additionalProperties: s.json() },
);
