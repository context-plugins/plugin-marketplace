import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartFaceSearchResponse = {
  /**
   * The identifier for the search job. Use JobId to identify the job in a subsequent call to
   * GetFaceSearch.
   */
  jobId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startFaceSearchResponseSchema: Schema<StartFaceSearchResponse> =
  s.object<StartFaceSearchResponse>(
    {
      jobId: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
