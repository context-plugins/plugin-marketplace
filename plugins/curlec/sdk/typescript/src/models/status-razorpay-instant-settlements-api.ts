import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusRazorpayInstantSettlementsApi = {
  Created: "created",
  Initiated: "initiated",
  PartiallyProcessed: "partially_processed",
  Processed: "processed",
  Reversed: "reversed",
} as const;
export type StatusRazorpayInstantSettlementsApi =
  | (typeof StatusRazorpayInstantSettlementsApi)[keyof typeof StatusRazorpayInstantSettlementsApi]
  | (string & {});

export const statusRazorpayInstantSettlementsApiSchema: EnumSchema<StatusRazorpayInstantSettlementsApi> =
  s.enumOf<StatusRazorpayInstantSettlementsApi>(StatusRazorpayInstantSettlementsApi);
