import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  idrRunStatsByThreshold2Schema,
  type IdrRunStatsByThreshold2,
} from "./idr-run-stats-by-threshold2.js";
import { statusHightouchIdrApiSchema, type StatusHightouchIdrApi } from "./status-hightouch-idr-api.js";

export type IdrRun = {
  fullRerun: boolean;
  /** If available, the stats at the end of a successful run. */
  stats?: IdrRunStatsByThreshold2;
  /** Timestamp of the run's completion. Only set for successful or failed runs. */
  finishedAt?: Date;
  /** Timestamp of the run's start. Not set for queued runs. */
  startedAt?: Date;
  createdAt: Date;
  /** If available, the error associated with a failed status. */
  error?: string;
  status: StatusHightouchIdrApi;
  graphId: string;
  id: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const idrRunSchema: Schema<IdrRun> = s.object<IdrRun>(
  {
    fullRerun: s.boolean(),
    stats: s.optional(s.lazy(() => idrRunStatsByThreshold2Schema)),
    finishedAt: s.optional(s.dateTime()),
    startedAt: s.optional(s.dateTime()),
    createdAt: s.dateTime(),
    error: s.optional(s.string()),
    status: statusHightouchIdrApiSchema,
    graphId: s.string(),
    id: s.string(),
  },
  { additionalProperties: s.json() },
);
