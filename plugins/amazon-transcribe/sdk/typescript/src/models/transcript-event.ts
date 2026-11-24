import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transcribestreamingTranscriptSchema,
  type TranscribestreamingTranscript,
} from "./transcribestreaming-transcript.js";

export type TranscriptEvent = {
  transcript?: TranscribestreamingTranscript;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptEventSchema: Schema<TranscriptEvent> = s.object<TranscriptEvent>(
  {
    transcript: s.optional(s.lazy(() => transcribestreamingTranscriptSchema)),
    _keysMap: {
      transcript: "Transcript",
    },
  },
  { additionalProperties: s.json() },
);
