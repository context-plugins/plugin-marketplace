import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { confidenceSchema, type Confidence } from "./unions/confidence.js";
import { endSchema, type End } from "./unions/end.js";
import { start13Schema, type Start13 } from "./unions/start13.js";

/**
 * Per-word STT confidence. `word` prefers the provider's punctuated form so the stored words read
 * the same way as the transcript they came from.
 */
export type TranscriptWordConfidence = {
  word: string;
  confidence?: Confidence;
  start?: Start13;
  end?: End;
};

export const transcriptWordConfidenceSchema: Schema<TranscriptWordConfidence> =
  s.object<TranscriptWordConfidence>({
    word: s.string(),
    confidence: s.optional(s.lazy(() => confidenceSchema)),
    start: s.optional(s.lazy(() => start13Schema)),
    end: s.optional(s.lazy(() => endSchema)),
  });
