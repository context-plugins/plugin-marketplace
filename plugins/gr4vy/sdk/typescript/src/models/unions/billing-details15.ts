import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingDetailsSchema, type BillingDetails } from "../billing-details.js";

/** The billing details associated with the capture. */
export type BillingDetails15 = BillingDetails;

export const billingDetails15Schema: Schema<BillingDetails15> = s.of<BillingDetails15>(
  s.union([s.lazy(() => billingDetailsSchema)]),
);
