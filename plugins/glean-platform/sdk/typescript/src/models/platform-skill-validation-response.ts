import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillValidationFileSchema,
  type PlatformSkillValidationFile,
} from "./platform-skill-validation-file.js";
import {
  platformSkillValidationMetadataSchema,
  type PlatformSkillValidationMetadata,
} from "./platform-skill-validation-metadata.js";
import { platformWarningSchema, type PlatformWarning } from "./platform-warning.js";

export type PlatformSkillValidationResponse = {
  metadata: PlatformSkillValidationMetadata;
  /** Normalized files in the bundle after stripping an optional single root folder. */
  files: PlatformSkillValidationFile[];
  /** Non-blocking validation warnings. */
  warnings: PlatformWarning[];
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillValidationResponseSchema: Schema<PlatformSkillValidationResponse> =
  s.object<PlatformSkillValidationResponse>({
    metadata: platformSkillValidationMetadataSchema,
    files: s.array(s.lazy(() => platformSkillValidationFileSchema)),
    warnings: s.array(s.lazy(() => platformWarningSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
