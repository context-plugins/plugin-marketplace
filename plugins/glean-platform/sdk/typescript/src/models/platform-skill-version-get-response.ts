import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSkillVersionSchema, type PlatformSkillVersion } from "./platform-skill-version.js";

export type PlatformSkillVersionGetResponse = {
  version: PlatformSkillVersion;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillVersionGetResponseSchema: Schema<PlatformSkillVersionGetResponse> =
  s.object<PlatformSkillVersionGetResponse>({
    version: platformSkillVersionSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
