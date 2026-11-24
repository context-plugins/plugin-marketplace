import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartFaceDetectionResponse = {
  /**
   * The identifier for the face detection job. Use JobId to identify the job in a subsequent call
   * to GetFaceDetection.
   */
  jobId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startFaceDetectionResponseSchema: Schema<StartFaceDetectionResponse> =
  s.object<StartFaceDetectionResponse>(
    {
      jobId: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
