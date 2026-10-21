import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Activation to apply for the authenticated caller. For the owner, this updates the skill's stored
 * status. For any other caller, it updates only that caller's setting.
 */
export const PlatformSkillUpdateStatus = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type PlatformSkillUpdateStatus =
  | (typeof PlatformSkillUpdateStatus)[keyof typeof PlatformSkillUpdateStatus]
  | (string & {});

export const platformSkillUpdateStatusSchema: EnumSchema<PlatformSkillUpdateStatus> =
  s.enumOf<PlatformSkillUpdateStatus>(PlatformSkillUpdateStatus);
