import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartPersonTrackingResponse = {
  /**
   * The identifier for the person detection job. Use JobId to identify the job in a subsequent call
   * to GetPersonTracking.
   */
  jobId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startPersonTrackingResponseSchema: Schema<StartPersonTrackingResponse> =
  s.object<StartPersonTrackingResponse>(
    {
      jobId: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
