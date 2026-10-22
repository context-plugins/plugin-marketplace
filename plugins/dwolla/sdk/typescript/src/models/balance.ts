import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Balance = {
  value?: string;
  currency?: string;
};

export const balanceSchema: Schema<Balance> = s.object<Balance>({
  value: s.optional(s.string()),
  currency: s.optional(s.string()),
});
