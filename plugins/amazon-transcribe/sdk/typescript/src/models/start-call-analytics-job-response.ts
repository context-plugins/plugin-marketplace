import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callAnalyticsJobSchema, type CallAnalyticsJob } from "./call-analytics-job.js";

export type StartCallAnalyticsJobResponse = {
  callAnalyticsJob?: CallAnalyticsJob;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startCallAnalyticsJobResponseSchema: Schema<StartCallAnalyticsJobResponse> =
  s.object<StartCallAnalyticsJobResponse>(
    {
      callAnalyticsJob: s.optional(s.lazy(() => callAnalyticsJobSchema)),
      _keysMap: {
        callAnalyticsJob: "CallAnalyticsJob",
      },
    },
    { additionalProperties: s.json() },
  );
