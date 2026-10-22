import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSkillSchema, type PlatformSkill } from "./platform-skill.js";

export type PlatformSkillUpdateResponse = {
  skill: PlatformSkill;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillUpdateResponseSchema: Schema<PlatformSkillUpdateResponse> =
  s.object<PlatformSkillUpdateResponse>({
    skill: platformSkillSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
