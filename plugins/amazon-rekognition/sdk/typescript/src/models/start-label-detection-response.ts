import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartLabelDetectionResponse = {
  /**
   * The identifier for the label detection job. Use JobId to identify the job in a subsequent call
   * to GetLabelDetection.
   */
  jobId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startLabelDetectionResponseSchema: Schema<StartLabelDetectionResponse> =
  s.object<StartLabelDetectionResponse>(
    {
      jobId: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
