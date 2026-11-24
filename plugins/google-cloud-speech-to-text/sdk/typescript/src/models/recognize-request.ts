import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recognitionAudio2Schema, type RecognitionAudio2 } from "./recognition-audio2.js";
import { recognitionConfig2Schema, type RecognitionConfig2 } from "./recognition-config2.js";

/** The top-level message sent by the client for the `Recognize` method. */
export type RecognizeRequest = {
  /** Required. Provides information to the recognizer that specifies how to process the request. */
  config?: RecognitionConfig2;
  /** Required. The audio data to be recognized. */
  audio?: RecognitionAudio2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizeRequestSchema: Schema<RecognizeRequest> = s.object<RecognizeRequest>(
  {
    config: s.optional(s.lazy(() => recognitionConfig2Schema)),
    audio: s.optional(s.lazy(() => recognitionAudio2Schema)),
  },
  { additionalProperties: s.json() },
);
