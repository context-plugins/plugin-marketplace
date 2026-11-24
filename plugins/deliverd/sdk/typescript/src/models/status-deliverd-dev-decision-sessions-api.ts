import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevDecisionSessionsApi = {
  Open: "open",
  Verified: "verified",
  Complete: "complete",
  Expired: "expired",
} as const;
export type StatusDeliverdDevDecisionSessionsApi =
  | (typeof StatusDeliverdDevDecisionSessionsApi)[keyof typeof StatusDeliverdDevDecisionSessionsApi]
  | (string & {});

export const statusDeliverdDevDecisionSessionsApiSchema: EnumSchema<StatusDeliverdDevDecisionSessionsApi> =
  s.enumOf<StatusDeliverdDevDecisionSessionsApi>(StatusDeliverdDevDecisionSessionsApi);
