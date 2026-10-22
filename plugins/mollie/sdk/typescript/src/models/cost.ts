import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullable6Schema, type AmountNullable6 } from "./amount-nullable6.js";
import { amount4Schema, type Amount4 } from "./amount4.js";
import { amount5Schema, type Amount5 } from "./amount5.js";
import { rateSchema, type Rate } from "./rate.js";
import { settlementMethodSchema, type SettlementMethod } from "./settlement-method.js";

export type Cost = {
  /** A description of the cost subtotal */
  description: string;
  /**
   * The method the cost or revenue subtotal applies to. This is usually a payment method, but can
   * also represent a correction or transaction type that is not tied to a specific payment method.
   */
  method: SettlementMethod | null;
  /** The number of fees */
  count: number;
  /** The service rates, further divided into `fixed` and `percentage` costs. */
  rate: Rate;
  /** The net total cost, i.e. excluding VAT */
  amountNet: Amount4;
  /** The applicable VAT */
  amountVat: AmountNullable6 | null;
  /** The gross total cost, i.e. including VAT */
  amountGross: Amount5;
};

export const costSchema: Schema<Cost> = s.object<Cost>({
  description: s.string(),
  method: s.nullable(s.lazy(() => settlementMethodSchema)),
  count: s.int(),
  rate: rateSchema,
  amountNet: amount4Schema,
  amountVat: s.nullable(s.lazy(() => amountNullable6Schema)),
  amountGross: amount5Schema,
});
