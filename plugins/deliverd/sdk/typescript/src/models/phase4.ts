import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `started` claims a use before you act; `completed` or `failed` reports the outcome. Reporting
 * `completed` without a `claimId` claims and reports in one
 */
export const Phase4 = {
  Started: "started",
  Completed: "completed",
  Failed: "failed",
} as const;
export type Phase4 = (typeof Phase4)[keyof typeof Phase4] | (string & {});

export const phase4Schema: EnumSchema<Phase4> = s.enumOf<Phase4>(Phase4);
