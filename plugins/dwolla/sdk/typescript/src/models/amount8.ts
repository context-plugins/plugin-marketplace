import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Amount8 = {
  /**
   * Amount of funds to increase or decrease for a Label. To decrease funds in a Label a string
   * numeric value will be supplied and prepended with a "-" operator.
   */
  value: string;
  /** Currency code for the amount */
  currency: string;
};

export const amount8Schema: Schema<Amount8> = s.object<Amount8>({
  value: s.string(),
  currency: s.string(),
});
