import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRazorpayXAccountValidationApi = {
  Created: "created",
  Completed: "completed",
  Failed: "failed",
} as const;
export type StatusRazorpayXAccountValidationApi =
  | (typeof StatusRazorpayXAccountValidationApi)[keyof typeof StatusRazorpayXAccountValidationApi]
  | (string & {});

export const statusRazorpayXAccountValidationApiSchema: EnumSchema<StatusRazorpayXAccountValidationApi> =
  s.enumOf<StatusRazorpayXAccountValidationApi>(StatusRazorpayXAccountValidationApi);
