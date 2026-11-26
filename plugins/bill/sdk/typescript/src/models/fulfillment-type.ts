import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the fulfillment type for reimbursements in the Spend API. */
export const FulfillmentType = {
  Ach: "ACH",
  Payroll: "PAYROLL",
} as const;
export type FulfillmentType = (typeof FulfillmentType)[keyof typeof FulfillmentType] | (string & {});

export const fulfillmentTypeSchema: EnumSchema<FulfillmentType> = s.enumOf<FulfillmentType>(FulfillmentType);
