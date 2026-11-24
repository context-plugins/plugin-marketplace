import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MediaAnalysisModelVersions = {
  /** The Moderation base model version. */
  moderation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaAnalysisModelVersionsSchema: Schema<MediaAnalysisModelVersions> =
  s.object<MediaAnalysisModelVersions>(
    {
      moderation: s.optional(s.string()),
      _keysMap: {
        moderation: "Moderation",
      },
    },
    { additionalProperties: s.json() },
  );
