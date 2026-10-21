import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformSkillVersionSchema, type PlatformSkillVersion } from "./platform-skill-version.js";

export type PlatformSkillVersionCreateResponse = {
  version: PlatformSkillVersion;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillVersionCreateResponseSchema: Schema<PlatformSkillVersionCreateResponse> =
  s.object<PlatformSkillVersionCreateResponse>({
    version: platformSkillVersionSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
