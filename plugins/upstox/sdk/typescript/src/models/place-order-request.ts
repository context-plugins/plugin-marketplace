import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  orderTypeOpenApiDefinitionOrderApiSchema,
  type OrderTypeOpenApiDefinitionOrderApi,
} from "./order-type-open-api-definition-order-api.js";
import {
  productOpenApiDefinitionOrderApiSchema,
  type ProductOpenApiDefinitionOrderApi,
} from "./product-open-api-definition-order-api.js";
import { transactionTypeSchema, type TransactionType } from "./transaction-type.js";
import { validitySchema, type Validity } from "./validity.js";

export type PlaceOrderRequest = {
  /** Quantity with which the order is to be placed */
  quantity: number;
  /** Signifies if the order was either Intraday, Delivery, CO or OCO */
  product: ProductOpenApiDefinitionOrderApi;
  /** It can be one of the following - DAY(default), IOC */
  validity: Validity;
  /** Price at which the order will be placed */
  price: number;
  /** Tag for a particular order */
  tag?: string;
  /** Key of the instrument */
  instrumentToken: string;
  /**
   * Type of order. It can be one of the following MARKET refers to market order LIMIT refers to
   * Limit Order SL refers to Stop Loss Limit SL-M refers to Stop Loss Market
   */
  orderType: OrderTypeOpenApiDefinitionOrderApi;
  /** Indicates whether its a buy or sell order */
  transactionType: TransactionType;
  /** The quantity that should be disclosed in the market depth */
  disclosedQuantity: number;
  /** If the order is a stop loss order then the trigger price to be set is mentioned here */
  triggerPrice: number;
  /** Signifies if the order is an After Market Order */
  isAmo: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placeOrderRequestSchema: Schema<PlaceOrderRequest> = s.object<PlaceOrderRequest>(
  {
    quantity: s.int(),
    product: productOpenApiDefinitionOrderApiSchema,
    validity: validitySchema,
    price: s.float64(),
    tag: s.optional(s.string()),
    instrumentToken: s.string(),
    orderType: orderTypeOpenApiDefinitionOrderApiSchema,
    transactionType: transactionTypeSchema,
    disclosedQuantity: s.int(),
    triggerPrice: s.float64(),
    isAmo: s.boolean(),
    _keysMap: {
      instrumentToken: "instrument_token",
      orderType: "order_type",
      transactionType: "transaction_type",
      disclosedQuantity: "disclosed_quantity",
      triggerPrice: "trigger_price",
      isAmo: "is_amo",
    },
  },
  { additionalProperties: s.json() },
);
