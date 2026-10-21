import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { subTotals2Schema, type SubTotals2 } from "./sub-totals2.js";

export type SubGroup = {
  /**
   * In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value`
   * field.
   */
  amount?: Amount;
  subtotals?: SubTotals2[] | null;
};

export const subGroupSchema: Schema<SubGroup> = s.object<SubGroup>({
  amount: s.optional(s.lazy(() => amountSchema)),
  subtotals: s.optionalNullable(s.array(s.lazy(() => subTotals2Schema))),
});
