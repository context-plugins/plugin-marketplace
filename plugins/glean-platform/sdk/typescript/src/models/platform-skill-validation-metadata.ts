import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformSkillValidationMetadata = {
  /** Skill name parsed from SKILL.md frontmatter. */
  displayName: string;
  /** Skill description parsed from SKILL.md frontmatter. */
  description: string;
};

export const platformSkillValidationMetadataSchema: Schema<PlatformSkillValidationMetadata> =
  s.object<PlatformSkillValidationMetadata>({
    displayName: s.string(),
    description: s.string(),
    _keysMap: {
      displayName: "display_name",
    },
  });
