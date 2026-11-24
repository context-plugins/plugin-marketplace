import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Customer status: churned when the customer is marked as churned, active otherwise. */
export const CustomerStatus = {
  Active: "active",
  Churned: "churned",
} as const;
export type CustomerStatus = (typeof CustomerStatus)[keyof typeof CustomerStatus] | (string & {});

export const customerStatusSchema: EnumSchema<CustomerStatus> = s.enumOf<CustomerStatus>(CustomerStatus);
