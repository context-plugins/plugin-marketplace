import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { billingDetailsSchema, type BillingDetails } from "../billing-details.js";

/** The billing name, address, email, and other fields for this buyer. */
export type BillingDetails1 = BillingDetails;

export const billingDetails1Schema: Schema<BillingDetails1> = s.of<BillingDetails1>(
  s.union([s.lazy(() => billingDetailsSchema)]),
);
