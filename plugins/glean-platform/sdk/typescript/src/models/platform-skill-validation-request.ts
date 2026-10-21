import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformSkillValidationRequest = {
  /** SKILL.md, .zip, or .skill bundle to validate. */
  file: Uint8Array;
};

export const platformSkillValidationRequestSchema: Schema<PlatformSkillValidationRequest> =
  s.object<PlatformSkillValidationRequest>({
    file: s.bytes(),
  });
