import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The caller's effective activation. The owner sees the skill's stored status. Another caller sees
 * their personal setting, or DISABLED when they have none. DRAFT is the stored draft state and is
 * not set by update. Effective activation may also reflect workspace governance policy.
 */
export const PlatformSkillStatus = {
  Draft: "DRAFT",
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type PlatformSkillStatus =
  | (typeof PlatformSkillStatus)[keyof typeof PlatformSkillStatus]
  | (string & {});

export const platformSkillStatusSchema: EnumSchema<PlatformSkillStatus> =
  s.enumOf<PlatformSkillStatus>(PlatformSkillStatus);
