import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSkillSchema, type PlatformSkill } from "./platform-skill.js";

export type PlatformSkillImportResponse = {
  /**
   * Imported skills in request order. The import is atomic: either every source persists or none
   * does.
   */
  skills: PlatformSkill[];
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillImportResponseSchema: Schema<PlatformSkillImportResponse> =
  s.object<PlatformSkillImportResponse>({
    skills: s.array(s.lazy(() => platformSkillSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
