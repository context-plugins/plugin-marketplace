import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InputType = {
  RazorpayToken: "razorpay_token",
  ServiceProviderToken: "service_provider_token",
  Raw: "raw",
} as const;
export type InputType = (typeof InputType)[keyof typeof InputType] | (string & {});

export const inputTypeSchema: EnumSchema<InputType> = s.enumOf<InputType>(InputType);
