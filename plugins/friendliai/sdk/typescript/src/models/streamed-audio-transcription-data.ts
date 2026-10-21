import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";
import { deltaSchema, type Delta } from "./unions/delta.js";
import { textSchema, type Text } from "./unions/text.js";
import { usageSchema, type Usage } from "./unions/usage.js";

export type StreamedAudioTranscriptionData = {
  /** The event type, which is `transcript.text.delta` or `transcript.text.done`. */
  type: Type;
  /** The incremental transcript text. */
  delta?: Delta;
  /** The transcribed text. */
  text?: Text;
  usage?: Usage;
};

export const streamedAudioTranscriptionDataSchema: Schema<StreamedAudioTranscriptionData> =
  s.object<StreamedAudioTranscriptionData>({
    type: typeSchema,
    delta: s.optional(s.lazy(() => deltaSchema)),
    text: s.optional(s.lazy(() => textSchema)),
    usage: s.optional(s.lazy(() => usageSchema)),
  });
