import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillSourcePreviewFileSchema,
  type PlatformSkillSourcePreviewFile,
} from "./platform-skill-source-preview-file.js";

export type PlatformSkillSourcePreview = {
  /** Skill name parsed from SKILL.md frontmatter. */
  displayName: string;
  /** Skill description parsed from SKILL.md frontmatter. */
  description: string;
  /** Resolved URL for this skill within the source. */
  sourceUrl: string;
  /** Commit SHA used to produce the preview. */
  commitSha: string;
  /** SKILL.md content fetched as part of the preview. */
  mainContent: string;
  /** Supporting files fetched with the skill. */
  files: PlatformSkillSourcePreviewFile[];
  /** Relative paths discovered for the skill. */
  fileTree: string[];
};

export const platformSkillSourcePreviewSchema: Schema<PlatformSkillSourcePreview> =
  s.object<PlatformSkillSourcePreview>({
    displayName: s.string(),
    description: s.string(),
    sourceUrl: s.string(),
    commitSha: s.string(),
    mainContent: s.string(),
    files: s.array(s.lazy(() => platformSkillSourcePreviewFileSchema)),
    fileTree: s.array(s.string()),
    _keysMap: {
      displayName: "display_name",
      sourceUrl: "source_url",
      commitSha: "commit_sha",
      mainContent: "main_content",
      fileTree: "file_tree",
    },
  });
