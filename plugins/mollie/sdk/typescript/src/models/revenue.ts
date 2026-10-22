import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullable6Schema, type AmountNullable6 } from "./amount-nullable6.js";
import { amount6Schema, type Amount6 } from "./amount6.js";
import { amount7Schema, type Amount7 } from "./amount7.js";
import { settlementMethodSchema, type SettlementMethod } from "./settlement-method.js";

export type Revenue = {
  /** A description of the revenue subtotal */
  description: string;
  /**
   * The method the cost or revenue subtotal applies to. This is usually a payment method, but can
   * also represent a correction or transaction type that is not tied to a specific payment method.
   */
  method: SettlementMethod | null;
  /** The number of payments */
  count: number;
  /** The net total of received funds, i.e. excluding VAT */
  amountNet: Amount6;
  /** The applicable VAT */
  amountVat: AmountNullable6 | null;
  /** The gross total of received funds, i.e. including VAT */
  amountGross: Amount7;
};

export const revenueSchema: Schema<Revenue> = s.object<Revenue>({
  description: s.string(),
  method: s.nullable(s.lazy(() => settlementMethodSchema)),
  count: s.int(),
  amountNet: amount6Schema,
  amountVat: s.nullable(s.lazy(() => amountNullable6Schema)),
  amountGross: amount7Schema,
});
