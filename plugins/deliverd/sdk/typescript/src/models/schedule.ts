import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Schedule = {
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

export const scheduleSchema: Schema<Schedule> = s.object<Schedule>(
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
