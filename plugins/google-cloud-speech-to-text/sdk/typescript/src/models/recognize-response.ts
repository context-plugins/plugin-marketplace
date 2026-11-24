import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { speechAdaptationInfo2Schema, type SpeechAdaptationInfo2 } from "./speech-adaptation-info2.js";
import { speechRecognitionResultSchema, type SpeechRecognitionResult } from "./speech-recognition-result.js";

/**
 * The only message returned to the client by the `Recognize` method. It contains the result as zero
 * or more sequential `SpeechRecognitionResult` messages.
 */
export type RecognizeResponse = {
  /** When available, billed audio seconds for the corresponding request. */
  totalBilledTime?: string;
  /**
   * Whether request used legacy asr models (was not automatically migrated to use conformer
   * models).
   */
  usingLegacyModels?: boolean;
  /** Provides information on adaptation behavior in response */
  speechAdaptationInfo?: SpeechAdaptationInfo2;
  /** Sequential list of transcription results corresponding to sequential portions of audio. */
  results?: SpeechRecognitionResult[];
  /** The ID associated with the request. This is a unique ID specific only to the given request. */
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recognizeResponseSchema: Schema<RecognizeResponse> = s.object<RecognizeResponse>(
  {
    totalBilledTime: s.optional(s.string()),
    usingLegacyModels: s.optional(s.boolean()),
    speechAdaptationInfo: s.optional(s.lazy(() => speechAdaptationInfo2Schema)),
    results: s.optional(s.array(s.lazy(() => speechRecognitionResultSchema))),
    requestId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
