import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomersGetParametersStatus = {
  Active: "active",
  Churned: "churned",
} as const;
export type CustomersGetParametersStatus =
  | (typeof CustomersGetParametersStatus)[keyof typeof CustomersGetParametersStatus]
  | (string & {});

export const customersGetParametersStatusSchema: EnumSchema<CustomersGetParametersStatus> =
  s.enumOf<CustomersGetParametersStatus>(CustomersGetParametersStatus);
