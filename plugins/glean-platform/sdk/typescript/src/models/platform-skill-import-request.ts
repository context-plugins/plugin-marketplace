import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformSkillImportRequest = {
  /** Resolved GitHub skill URLs selected from a source preview. */
  sourceUrls: string[];
};

export const platformSkillImportRequestSchema: Schema<PlatformSkillImportRequest> =
  s.object<PlatformSkillImportRequest>({
    sourceUrls: s.array(s.string()),
    _keysMap: {
      sourceUrls: "source_urls",
    },
  });
