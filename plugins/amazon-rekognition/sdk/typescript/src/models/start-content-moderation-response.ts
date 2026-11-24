import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartContentModerationResponse = {
  /**
   * The identifier for the content analysis job. Use JobId to identify the job in a subsequent call
   * to GetContentModeration.
   */
  jobId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startContentModerationResponseSchema: Schema<StartContentModerationResponse> =
  s.object<StartContentModerationResponse>(
    {
      jobId: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
