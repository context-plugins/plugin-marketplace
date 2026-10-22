import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodSummarySchema, type PaymentMethodSummary } from "./payment-method-summary.js";

export type PaymentMethodSummaries = {
  /** A list of items returned for this request. */
  items: PaymentMethodSummary[];
};

export const paymentMethodSummariesSchema: Schema<PaymentMethodSummaries> = s.object<PaymentMethodSummaries>({
  items: s.array(s.lazy(() => paymentMethodSummarySchema)),
});
