import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

/** The service rates, further divided into `fixed` and `percentage` costs. */
export type Rate = {
  /**
   * In v2 endpoints, monetary amounts are represented as objects with a `currency` and `value`
   * field.
   */
  fixed?: Amount;
  percentage?: string;
};

export const rateSchema: Schema<Rate> = s.object<Rate>({
  fixed: s.optional(s.lazy(() => amountSchema)),
  percentage: s.optional(s.string()),
});
