import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Present when status is failed. */
export type ErrorTranscriptfetchTranscriptsApi = {
  code?: string;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorTranscriptfetchTranscriptsApiSchema: Schema<ErrorTranscriptfetchTranscriptsApi> =
  s.object<ErrorTranscriptfetchTranscriptsApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
