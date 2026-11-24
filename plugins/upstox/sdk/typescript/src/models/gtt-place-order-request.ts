import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gttRuleInternalSchema, gttRuleSchema, type GttRule } from "./gtt-rule.js";
import { product3Schema, type Product3 } from "./product3.js";
import { transactionTypeSchema, type TransactionType } from "./transaction-type.js";
import { typeSchema, type Type } from "./type.js";

export type GttPlaceOrderRequest = {
  /**
   * Type of GTT order. It can be one of the following: SINGLE refers to a single-leg GTT order
   * MULTIPLE refers to a multi-leg GTT order
   */
  type: Type;
  /** Quantity with which the order is to be placed */
  quantity: number;
  /** Signifies if the order was either Intraday, Delivery or MTF */
  product: Product3;
  /** List of rules defining the conditions for each leg in the GTT order */
  rules: GttRule[];
  /** Key of the instrument */
  instrumentToken: string;
  /** Indicates whether its a buy or sell order */
  transactionType: TransactionType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gttPlaceOrderRequestProperties: s.Shape<GttPlaceOrderRequest> = {
  type: typeSchema,
  quantity: s.int(),
  product: product3Schema,
  rules: s.array(s.lazy(() => gttRuleInternalSchema)),
  instrumentToken: s.string(),
  transactionType: transactionTypeSchema,
  _keysMap: {
    instrumentToken: "instrument_token",
    transactionType: "transaction_type",
  },
};

export const gttPlaceOrderRequestInternalSchema: Schema<GttPlaceOrderRequest> =
  s.object<GttPlaceOrderRequest>(gttPlaceOrderRequestProperties, { additionalProperties: s.json() });

export const gttPlaceOrderRequestSchema: Schema<GttPlaceOrderRequest> = s.lazySchema(() =>
  s.object<GttPlaceOrderRequest>(
    {
      ...gttPlaceOrderRequestProperties,
      rules: s.array(s.lazy(() => gttRuleSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
