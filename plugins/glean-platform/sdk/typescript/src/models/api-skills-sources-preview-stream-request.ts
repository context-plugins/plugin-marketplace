import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiSkillsSourcesPreviewStreamRequest = {
  /** GitHub URL for a skill directory, SKILL.md file, or repository to inspect. */
  sourceUrl: string;
  /** Whether to stream repository scan progress using server-sent events. @default "True" */
  stream?: "True";
};

export const apiSkillsSourcesPreviewStreamRequestSchema: Schema<ApiSkillsSourcesPreviewStreamRequest> =
  s.object<ApiSkillsSourcesPreviewStreamRequest>({
    sourceUrl: s.string(),
    stream: s.defaulted(s.literal("True"), "True"),
    _keysMap: {
      sourceUrl: "source_url",
    },
  });
