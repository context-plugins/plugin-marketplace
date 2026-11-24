import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusContentstackAutomateManagementExecutionLogsApiSchema,
  type StatusContentstackAutomateManagementExecutionLogsApi,
} from "./status-contentstack-automate-management-execution-logs-api.js";

/** A record of a single automation execution run. */
export type ExecutionLog = {
  /** Unique identifier of the execution log entry. */
  uid?: string;
  /** UID of the automation that was executed. */
  automationUid?: string;
  /** Outcome status of the execution. */
  status?: StatusContentstackAutomateManagementExecutionLogsApi;
  /** ISO 8601 timestamp when the execution started. */
  startedAt?: Date;
  /** ISO 8601 timestamp when the execution completed. */
  completedAt?: Date;
  /** Step-by-step execution results. */
  steps?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionLogSchema: Schema<ExecutionLog> = s.object<ExecutionLog>(
  {
    uid: s.optional(s.string()),
    automationUid: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusContentstackAutomateManagementExecutionLogsApiSchema)),
    startedAt: s.optional(s.dateTime()),
    completedAt: s.optional(s.dateTime()),
    steps: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      automationUid: "automation_uid",
      startedAt: "started_at",
      completedAt: "completed_at",
    },
  },
  { additionalProperties: s.json() },
);
