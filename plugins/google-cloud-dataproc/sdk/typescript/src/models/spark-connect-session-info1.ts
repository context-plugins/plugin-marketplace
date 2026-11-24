import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Spark Connect Session Info */
export type SparkConnectSessionInfo1 = {
  /** Timestamp when the session started. */
  startTimestamp?: string;
  /** Required. Session ID of the session. */
  sessionId?: string;
  /** User ID of the user who started the session. */
  userId?: string;
  /** Optional. Total number of executions in the session. */
  totalExecution?: string;
  /** Timestamp when the session finished. */
  finishTimestamp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sparkConnectSessionInfo1Schema: Schema<SparkConnectSessionInfo1> =
  s.object<SparkConnectSessionInfo1>(
    {
      startTimestamp: s.optional(s.string()),
      sessionId: s.optional(s.string()),
      userId: s.optional(s.string()),
      totalExecution: s.optional(s.string()),
      finishTimestamp: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
