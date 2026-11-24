import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusBoomiPlatformRestExecutionApiSchema,
  type StatusBoomiPlatformRestExecutionApi,
} from "./status-boomi-platform-rest-execution-api.js";

/** A record of an integration process execution (job run). */
export type ExecutionRecord = {
  /** Unique identifier of the execution. */
  executionId?: string;
  /** ID of the process that was executed. */
  processId?: string;
  /** ID of the Atom that ran the process. */
  atomId?: string;
  /** Final status of the execution. */
  status?: StatusBoomiPlatformRestExecutionApi;
  /** Timestamp when the execution started. */
  executionTime?: Date;
  /** Execution duration in milliseconds. */
  duration?: number;
  /** Status message or error details. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionRecordSchema: Schema<ExecutionRecord> = s.object<ExecutionRecord>(
  {
    executionId: s.optional(s.string()),
    processId: s.optional(s.string()),
    atomId: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusBoomiPlatformRestExecutionApiSchema)),
    executionTime: s.optional(s.dateTime()),
    duration: s.optional(s.int()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
