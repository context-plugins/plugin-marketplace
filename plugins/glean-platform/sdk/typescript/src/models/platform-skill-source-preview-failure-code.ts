import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stable machine-readable reason a discovered entry was excluded. */
export const PlatformSkillSourcePreviewFailureCode = {
  InvalidSkill: "INVALID_SKILL",
  SkillFetchFailed: "SKILL_FETCH_FAILED",
} as const;
export type PlatformSkillSourcePreviewFailureCode =
  | (typeof PlatformSkillSourcePreviewFailureCode)[keyof typeof PlatformSkillSourcePreviewFailureCode]
  | (string & {});

export const platformSkillSourcePreviewFailureCodeSchema: EnumSchema<PlatformSkillSourcePreviewFailureCode> =
  s.enumOf<PlatformSkillSourcePreviewFailureCode>(PlatformSkillSourcePreviewFailureCode);
