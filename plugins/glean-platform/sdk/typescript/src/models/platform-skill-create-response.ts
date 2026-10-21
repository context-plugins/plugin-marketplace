import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSkillSchema, type PlatformSkill } from "./platform-skill.js";

export type PlatformSkillCreateResponse = {
  skill: PlatformSkill;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillCreateResponseSchema: Schema<PlatformSkillCreateResponse> =
  s.object<PlatformSkillCreateResponse>({
    skill: platformSkillSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
