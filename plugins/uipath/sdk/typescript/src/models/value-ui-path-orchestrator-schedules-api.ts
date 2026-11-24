import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueUiPathOrchestratorSchedulesApi = {
  /** Unique schedule identifier */
  id?: number;
  /** Schedule display name */
  name?: string;
  /** ID of the process associated with this schedule */
  releaseId?: number;
  /** Whether the schedule is active */
  enabled?: boolean;
  /** Cron expression defining the recurrence pattern */
  startProcessCron?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueUiPathOrchestratorSchedulesApiSchema: Schema<ValueUiPathOrchestratorSchedulesApi> =
  s.object<ValueUiPathOrchestratorSchedulesApi>(
    {
      id: s.optional(s.int()),
      name: s.optional(s.string()),
      releaseId: s.optional(s.int()),
      enabled: s.optional(s.boolean()),
      startProcessCron: s.optional(s.string()),
      _keysMap: {
        id: "Id",
        name: "Name",
        releaseId: "ReleaseId",
        enabled: "Enabled",
        startProcessCron: "StartProcessCron",
      },
    },
    { additionalProperties: s.json() },
  );
