import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformSkillCreateRequest = {
  /** SKILL.md, .zip, or .skill bundle to create. */
  file: Uint8Array;
};

export const platformSkillCreateRequestSchema: Schema<PlatformSkillCreateRequest> =
  s.object<PlatformSkillCreateRequest>({
    file: s.bytes(),
  });
