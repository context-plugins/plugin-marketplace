import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreview1Schema,
  type PlatformSkillSourcePreview1,
} from "./platform-skill-source-preview1.js";

/** One skill previewed; carries the previewed skill. */
export type PlatformSkillSourcePreviewStreamSkill = {
  /** Event type, also sent as the SSE `event` name. @default "SKILL" */
  type?: "SKILL";
  /** The previewed skill. */
  skill: PlatformSkillSourcePreview1;
};

export const platformSkillSourcePreviewStreamSkillSchema: Schema<PlatformSkillSourcePreviewStreamSkill> =
  s.object<PlatformSkillSourcePreviewStreamSkill>({
    type: s.defaulted(s.literal("SKILL"), "SKILL"),
    skill: platformSkillSourcePreview1Schema,
  });
