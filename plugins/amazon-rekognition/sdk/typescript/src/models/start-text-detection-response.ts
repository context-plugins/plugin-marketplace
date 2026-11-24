import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartTextDetectionResponse = {
  /**
   * Identifier for the text detection job. Use JobId to identify the job in a subsequent call to
   * GetTextDetection.
   */
  jobId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startTextDetectionResponseSchema: Schema<StartTextDetectionResponse> =
  s.object<StartTextDetectionResponse>(
    {
      jobId: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
