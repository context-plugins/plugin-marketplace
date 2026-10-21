import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewStreamSkillSchema,
  type PlatformSkillSourcePreviewStreamSkill,
} from "./platform-skill-source-preview-stream-skill.js";

export type PlatformSkillSourcePreviewStreamSkillServerSentEvent = {
  id?: string;
  /** @default "SKILL" */
  event?: "SKILL";
  /** One skill previewed; carries the previewed skill. */
  data: PlatformSkillSourcePreviewStreamSkill;
};

export const platformSkillSourcePreviewStreamSkillServerSentEventSchema: Schema<PlatformSkillSourcePreviewStreamSkillServerSentEvent> =
  s.object<PlatformSkillSourcePreviewStreamSkillServerSentEvent>({
    id: s.optional(s.string()),
    event: s.defaulted(s.literal("SKILL"), "SKILL"),
    data: platformSkillSourcePreviewStreamSkillSchema,
  });
