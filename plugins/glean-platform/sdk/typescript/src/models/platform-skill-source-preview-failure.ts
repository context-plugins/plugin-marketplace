import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewFailureCodeSchema,
  type PlatformSkillSourcePreviewFailureCode,
} from "./platform-skill-source-preview-failure-code.js";

export type PlatformSkillSourcePreviewFailure = {
  /** Resolved URL for the entry that could not be previewed. */
  sourceUrl: string;
  /** Stable machine-readable reason a discovered entry was excluded. */
  code: PlatformSkillSourcePreviewFailureCode;
  /** Safe explanation of why the entry was excluded. */
  detail: string;
};

export const platformSkillSourcePreviewFailureSchema: Schema<PlatformSkillSourcePreviewFailure> =
  s.object<PlatformSkillSourcePreviewFailure>({
    sourceUrl: s.string(),
    code: platformSkillSourcePreviewFailureCodeSchema,
    detail: s.string(),
    _keysMap: {
      sourceUrl: "source_url",
    },
  });
