import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { executionLogSchema, type ExecutionLog } from "./execution-log.js";

/** A list of automation execution log entries. */
export type ExecutionLogList = {
  /** Array of execution log objects. */
  data?: ExecutionLog[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionLogListSchema: Schema<ExecutionLogList> = s.object<ExecutionLogList>(
  {
    data: s.optional(s.array(s.lazy(() => executionLogSchema))),
  },
  { additionalProperties: s.json() },
);
