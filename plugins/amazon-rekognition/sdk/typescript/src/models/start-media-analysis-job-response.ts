import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartMediaAnalysisJobResponse = {
  /** Identifier for the created job. */
  jobId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startMediaAnalysisJobResponseSchema: Schema<StartMediaAnalysisJobResponse> =
  s.object<StartMediaAnalysisJobResponse>(
    {
      jobId: s.string(),
      _keysMap: {
        jobId: "JobId",
      },
    },
    { additionalProperties: s.json() },
  );
