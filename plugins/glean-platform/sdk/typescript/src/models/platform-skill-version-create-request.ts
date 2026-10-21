import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformSkillVersionCreateRequest = {
  /** SKILL.md, .zip, or .skill bundle to store as a new version. */
  file: Uint8Array;
};

export const platformSkillVersionCreateRequestSchema: Schema<PlatformSkillVersionCreateRequest> =
  s.object<PlatformSkillVersionCreateRequest>({
    file: s.bytes(),
  });
