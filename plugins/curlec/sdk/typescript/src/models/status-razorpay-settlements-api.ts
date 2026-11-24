import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRazorpaySettlementsApi = {
  Created: "created",
  Processed: "processed",
  Failed: "failed",
} as const;
export type StatusRazorpaySettlementsApi =
  | (typeof StatusRazorpaySettlementsApi)[keyof typeof StatusRazorpaySettlementsApi]
  | (string & {});

export const statusRazorpaySettlementsApiSchema: EnumSchema<StatusRazorpaySettlementsApi> =
  s.enumOf<StatusRazorpaySettlementsApi>(StatusRazorpaySettlementsApi);
