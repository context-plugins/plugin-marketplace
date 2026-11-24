import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartSegmentDetectionResponse = {
  /**
   * Unique identifier for the segment detection job. The JobId is returned from
   * StartSegmentDetection.
   */
  jobId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSegmentDetectionResponseSchema: Schema<StartSegmentDetectionResponse> =
  s.object<StartSegmentDetectionResponse>(
    {
      jobId: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
