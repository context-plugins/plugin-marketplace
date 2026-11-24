import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SchedulesRequest = {
  reportId: string;
  agentId: string;
  /** Five-field cron in UTC, e.g. 0 9 * * 5 */
  recurrence: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SchedulesRequestSchema: Schema<ApiV1SchedulesRequest> = s.object<ApiV1SchedulesRequest>(
  {
    reportId: s.string(),
    agentId: s.string(),
    recurrence: s.string(),
  },
  { additionalProperties: s.json() },
);
