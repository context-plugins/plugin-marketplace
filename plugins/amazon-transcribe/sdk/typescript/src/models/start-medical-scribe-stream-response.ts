import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { languageCode6Schema, type LanguageCode6 } from "./language-code6.js";
import { mediaEncoding2Schema, type MediaEncoding2 } from "./media-encoding2.js";
import {
  medicalScribeResultStreamSchema,
  type MedicalScribeResultStream,
} from "./medical-scribe-result-stream.js";

export type StartMedicalScribeStreamResponse = {
  /**
   * The identifier (in UUID format) for your streaming session. If you already started streaming,
   * this is same ID as the one you specified in your initial StartMedicalScribeStreamRequest.
   */
  sessionId?: string;
  /** The unique identifier for your streaming request. */
  requestId?: string;
  /**
   * The Language Code that you specified in your request. Same as provided in the
   * StartMedicalScribeStreamRequest.
   */
  languageCode?: LanguageCode6;
  /**
   * The sample rate (in hertz) that you specified in your request. Same as provided in the
   * StartMedicalScribeStreamRequest
   */
  mediaSampleRateHertz?: number;
  /**
   * The Media Encoding you specified in your request. Same as provided in the
   * StartMedicalScribeStreamRequest
   */
  mediaEncoding?: MediaEncoding2;
  /** Exactly one member is set. */
  resultStream?: MedicalScribeResultStream;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMedicalScribeStreamResponseSchema: Schema<StartMedicalScribeStreamResponse> =
  s.object<StartMedicalScribeStreamResponse>(
    {
      sessionId: s.optional(s.string()),
      requestId: s.optional(s.string()),
      languageCode: s.optional(s.lazy(() => languageCode6Schema)),
      mediaSampleRateHertz: s.optional(s.int()),
      mediaEncoding: s.optional(s.lazy(() => mediaEncoding2Schema)),
      resultStream: s.optional(s.lazy(() => medicalScribeResultStreamSchema)),
      _keysMap: {
        sessionId: "SessionId",
        requestId: "RequestId",
        languageCode: "LanguageCode",
        mediaSampleRateHertz: "MediaSampleRateHertz",
        mediaEncoding: "MediaEncoding",
        resultStream: "ResultStream",
      },
    },
    { additionalProperties: s.json() },
  );
