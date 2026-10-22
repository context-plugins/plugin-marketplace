import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferAmount = {
  value: string;
  currency: string;
};

export const transferAmountSchema: Schema<TransferAmount> = s.object<TransferAmount>({
  value: s.string(),
  currency: s.string(),
});
