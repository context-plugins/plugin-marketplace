import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformSkillValidationFile = {
  /** Normalized relative path in the skill bundle. */
  path: string;
  /** File size in bytes. */
  sizeBytes: number;
  /** Whether this file is the skill manifest. */
  isManifest: boolean;
};

export const platformSkillValidationFileSchema: Schema<PlatformSkillValidationFile> =
  s.object<PlatformSkillValidationFile>({
    path: s.string(),
    sizeBytes: s.int(),
    isManifest: s.boolean(),
    _keysMap: {
      sizeBytes: "size_bytes",
      isManifest: "is_manifest",
    },
  });
