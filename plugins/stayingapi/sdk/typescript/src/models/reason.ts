import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Present on skipped platform results; explains why a requested platform was not called. */
export const Reason = {
  NotEnabled: "not_enabled",
  RequiresDates: "requires_dates",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
