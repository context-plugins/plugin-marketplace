import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Evaluation reason */
export const Reason = {
  TargetingMatch: "TARGETING_MATCH",
  Default: "DEFAULT",
  Static: "STATIC",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
