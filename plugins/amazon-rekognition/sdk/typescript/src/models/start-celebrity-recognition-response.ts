import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartCelebrityRecognitionResponse = {
  /**
   * The identifier for the celebrity recognition analysis job. Use JobId to identify the job in a
   * subsequent call to GetCelebrityRecognition.
   */
  jobId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startCelebrityRecognitionResponseSchema: Schema<StartCelebrityRecognitionResponse> =
  s.object<StartCelebrityRecognitionResponse>(
    {
      jobId: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
