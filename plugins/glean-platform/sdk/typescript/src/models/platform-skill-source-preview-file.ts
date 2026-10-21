import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformSkillSourcePreviewFile = {
  /** Relative path within the skill bundle. */
  path: string;
  /** UTF-8 file content. */
  content: string;
};

export const platformSkillSourcePreviewFileSchema: Schema<PlatformSkillSourcePreviewFile> =
  s.object<PlatformSkillSourcePreviewFile>({
    path: s.string(),
    content: s.string(),
  });
