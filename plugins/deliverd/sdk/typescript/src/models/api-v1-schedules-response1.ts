import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SchedulesResponse1 = {
  id: string;
  reportId: string;
  reportSlug: string;
  reportTitle: string;
  reportUrl: string;
  agentId: string;
  agentName: string;
  recurrence: string;
  enabled: boolean;
  lastRunAt: string | null;
  nextRunAt: string | null;
  currentVersion: number | null;
  due: boolean;
  dueSince: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SchedulesResponse1Schema: Schema<ApiV1SchedulesResponse1> =
  s.object<ApiV1SchedulesResponse1>(
    {
      id: s.string(),
      reportId: s.string(),
      reportSlug: s.string(),
      reportTitle: s.string(),
      reportUrl: s.string(),
      agentId: s.string(),
      agentName: s.string(),
      recurrence: s.string(),
      enabled: s.boolean(),
      lastRunAt: s.nullable(s.string()),
      nextRunAt: s.nullable(s.string()),
      currentVersion: s.nullable(s.float64()),
      due: s.boolean(),
      dueSince: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
