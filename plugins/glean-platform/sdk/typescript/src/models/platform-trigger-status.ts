import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current trigger lifecycle state. */
export const PlatformTriggerStatus = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type PlatformTriggerStatus =
  | (typeof PlatformTriggerStatus)[keyof typeof PlatformTriggerStatus]
  | (string & {});

export const platformTriggerStatusSchema: EnumSchema<PlatformTriggerStatus> =
  s.enumOf<PlatformTriggerStatus>(PlatformTriggerStatus);
