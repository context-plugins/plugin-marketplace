import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { links34Schema, type Links34 } from "./links34.js";
import { transferAmountSchema, type TransferAmount } from "./transfer-amount.js";

export type Fee = {
  links?: Links34;
  amount?: TransferAmount;
};

export const feeSchema: Schema<Fee> = s.object<Fee>({
  links: s.optional(s.lazy(() => links34Schema)),
  amount: s.optional(s.lazy(() => transferAmountSchema)),
  _keysMap: {
    links: "_links",
  },
});
