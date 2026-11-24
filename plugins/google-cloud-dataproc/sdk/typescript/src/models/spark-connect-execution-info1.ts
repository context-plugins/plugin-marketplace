import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state3Schema, type State3 } from "./state3.js";

/** Spark Connect Execution Info */
export type SparkConnectExecutionInfo1 = {
  /** Optional. Tags associated with the Spark session. */
  sparkSessionTags?: string[];
  /** Output only. Current state of the execution. */
  state?: State3;
  /** statement of the execution. */
  statement?: string;
  /** Optional. List of job ids associated with the execution. */
  jobIds?: string[];
  /** Timestamp when the execution was closed. */
  closeTimestamp?: string;
  /** Timestamp when the execution started. */
  startTimestamp?: string;
  /** Required. Session ID, ties the execution to a specific Spark Connect session. */
  sessionId?: string;
  /** Timestamp when the execution finished. */
  finishTimestamp?: string;
  /** Detailed information about the execution. */
  detail?: string;
  /** User ID of the user who started the execution. */
  userId?: string;
  /** Required. Job tag of the execution. */
  jobTag?: string;
  /** Unique identifier for the operation. */
  operationId?: string;
  /** Optional. List of sql execution ids associated with the execution. */
  sqlExecIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkConnectExecutionInfo1Schema: Schema<SparkConnectExecutionInfo1> =
  s.object<SparkConnectExecutionInfo1>(
    {
      sparkSessionTags: s.optional(s.array(s.string())),
      state: s.optional(s.lazy(() => state3Schema)),
      statement: s.optional(s.string()),
      jobIds: s.optional(s.array(s.string())),
      closeTimestamp: s.optional(s.string()),
      startTimestamp: s.optional(s.string()),
      sessionId: s.optional(s.string()),
      finishTimestamp: s.optional(s.string()),
      detail: s.optional(s.string()),
      userId: s.optional(s.string()),
      jobTag: s.optional(s.string()),
      operationId: s.optional(s.string()),
      sqlExecIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
