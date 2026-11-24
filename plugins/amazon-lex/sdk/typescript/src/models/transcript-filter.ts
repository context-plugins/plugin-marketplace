import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lexTranscriptFilterSchema, type LexTranscriptFilter } from "./lex-transcript-filter.js";

export type TranscriptFilter = {
  lexTranscriptFilter?: LexTranscriptFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptFilterSchema: Schema<TranscriptFilter> = s.object<TranscriptFilter>(
  {
    lexTranscriptFilter: s.optional(s.lazy(() => lexTranscriptFilterSchema)),
  },
  { additionalProperties: s.json() },
);
