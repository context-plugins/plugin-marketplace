import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type Option = {
  /** The name of the shipping option, as shown to your customer. */
  description: string;
  /** Your own identifier for the shipping option. */
  reference: string;
  /**
   * In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value`
   * field.
   */
  amount: Amount;
};

export const optionSchema: Schema<Option> = s.object<Option>({
  description: s.string(),
  reference: s.string(),
  amount: amountSchema,
});
