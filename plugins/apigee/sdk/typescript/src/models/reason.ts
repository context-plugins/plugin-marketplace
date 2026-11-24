import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The reason for the feedback. */
export const Reason = {
  ReasonUnspecified: "REASON_UNSPECIFIED",
  InternalSystem: "INTERNAL_SYSTEM",
  NonRiskClient: "NON_RISK_CLIENT",
  Nat: "NAT",
  PenetrationTest: "PENETRATION_TEST",
  Other: "OTHER",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
