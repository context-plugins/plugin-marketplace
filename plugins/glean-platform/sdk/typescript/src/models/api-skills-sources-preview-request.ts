import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiSkillsSourcesPreviewRequest = {
  /** GitHub URL for a skill directory, SKILL.md file, or repository to inspect. */
  sourceUrl: string;
  /** Whether to stream repository scan progress using server-sent events. @default "False" */
  stream?: "False";
};

export const apiSkillsSourcesPreviewRequestSchema: Schema<ApiSkillsSourcesPreviewRequest> =
  s.object<ApiSkillsSourcesPreviewRequest>({
    sourceUrl: s.string(),
    stream: s.defaulted(s.literal("False"), "False"),
    _keysMap: {
      sourceUrl: "source_url",
    },
  });
