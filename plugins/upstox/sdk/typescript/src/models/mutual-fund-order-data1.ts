import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Mutual fund order details. */
export type MutualFundOrderData1 = {
  /** Current status of the order. */
  status?: string;
  /** Folio number, when allotted. */
  folio?: string;
  /** Display name of the fund. */
  fund?: string;
  /** Order amount. */
  amount?: number;
  /** Order variety or channel-specific classification, if available. */
  variety?: string;
  /** Units allotted or sold. */
  quantity?: number;
  /** Price or NAV used for the transaction, when available. */
  price?: number;
  /** Unique order identifier. */
  orderId?: string;
  /** Exchange-generated order id, if available. */
  exchangeOrderId?: string;
  /** ISIN of the fund, when available. */
  instrumentKey?: string;
  /** Human-readable status or rejection reason. */
  statusMessage?: string;
  /** Timestamp when the order was registered. */
  orderTimestamp?: string;
  /** Exchange date for the order, if available. */
  exchangeTimestamp?: string;
  /** Exchange settlement id, if available. */
  settlementId?: string;
  /** BUY or SELL. */
  transactionType?: string;
  /** FRESH or ADDITIONAL for buys, when available. */
  purchaseType?: string;
  /** Last known NAV. */
  lastPrice?: number;
  /** Allotted or sold NAV. */
  averagePrice?: number;
  /** Date for which last NAV is available. */
  lastPriceDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mutualFundOrderData1Schema: Schema<MutualFundOrderData1> = s.object<MutualFundOrderData1>(
  {
    status: s.optional(s.string()),
    folio: s.optional(s.string()),
    fund: s.optional(s.string()),
    amount: s.optional(s.float64()),
    variety: s.optional(s.string()),
    quantity: s.optional(s.float64()),
    price: s.optional(s.float64()),
    orderId: s.optional(s.string()),
    exchangeOrderId: s.optional(s.string()),
    instrumentKey: s.optional(s.string()),
    statusMessage: s.optional(s.string()),
    orderTimestamp: s.optional(s.string()),
    exchangeTimestamp: s.optional(s.string()),
    settlementId: s.optional(s.string()),
    transactionType: s.optional(s.string()),
    purchaseType: s.optional(s.string()),
    lastPrice: s.optional(s.float64()),
    averagePrice: s.optional(s.float64()),
    lastPriceDate: s.optional(s.string()),
    _keysMap: {
      orderId: "order_id",
      exchangeOrderId: "exchange_order_id",
      instrumentKey: "instrument_key",
      statusMessage: "status_message",
      orderTimestamp: "order_timestamp",
      exchangeTimestamp: "exchange_timestamp",
      settlementId: "settlement_id",
      transactionType: "transaction_type",
      purchaseType: "purchase_type",
      lastPrice: "last_price",
      averagePrice: "average_price",
      lastPriceDate: "last_price_date",
    },
  },
  { additionalProperties: s.json() },
);
