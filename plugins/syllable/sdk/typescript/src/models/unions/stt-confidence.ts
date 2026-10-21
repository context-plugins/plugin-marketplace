import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transcriptConfidenceSchema, type TranscriptConfidence } from "../transcript-confidence.js";

/**
 * The STT provider's confidence for a user utterance. Absent on agent turns, and on user turns
 * whose backend reported nothing -- absence means "not captured", never "the provider was certain
 * this was wrong". NOT one comparable quantity: read `provider` and `utterance_source` before
 * interpreting a value, and do not aggregate across providers. Deepgram reports a genuine acoustic
 * confidence and a per-word breakdown; Google reports an utterance score its own documentation
 * disclaims and no words; on Deepgram Flux the utterance score is the weakest word, computed by us
 * rather than reported.
 */
export type SttConfidence = TranscriptConfidence;

export const sttConfidenceSchema: Schema<SttConfidence> = s.of<SttConfidence>(
  s.union([s.lazy(() => transcriptConfidenceSchema)]),
);
