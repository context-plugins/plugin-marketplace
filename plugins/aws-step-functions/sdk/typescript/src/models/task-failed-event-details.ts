import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskFailedEventDetails = {
  /** The service name of the resource in a task state. */
  resourceType: string;
  /** The action of the resource called by a task state. */
  resource: string;
  /** The error code of the failure. */
  error?: string;
  /** A more detailed explanation of the cause of the failure. */
  cause?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskFailedEventDetailsSchema: Schema<TaskFailedEventDetails> = s.object<TaskFailedEventDetails>(
  {
    resourceType: s.string(),
    resource: s.string(),
    error: s.optional(s.string()),
    cause: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
