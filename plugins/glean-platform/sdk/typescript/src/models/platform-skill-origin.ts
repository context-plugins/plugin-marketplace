import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Source category for the skill. */
export const PlatformSkillOrigin = {
  Custom: "CUSTOM",
  Github: "GITHUB",
} as const;
export type PlatformSkillOrigin =
  | (typeof PlatformSkillOrigin)[keyof typeof PlatformSkillOrigin]
  | (string & {});

export const platformSkillOriginSchema: EnumSchema<PlatformSkillOrigin> =
  s.enumOf<PlatformSkillOrigin>(PlatformSkillOrigin);
