import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskCredentialsSchema, type TaskCredentials } from "./task-credentials.js";

export type TaskScheduledEventDetails = {
  /** The service name of the resource in a task state. */
  resourceType: string;
  /** The action of the resource called by a task state. */
  resource: string;
  /** The region of the scheduled task */
  region: string;
  /**
   * The JSON data passed to the resource referenced in a task state. Length constraints apply to
   * the payload size, and are expressed as bytes in UTF-8 encoding.
   */
  parameters: string;
  /** The maximum allowed duration of the task. */
  timeoutInSeconds?: number;
  /** The maximum allowed duration between two heartbeats for the task. */
  heartbeatInSeconds?: number;
  taskCredentials?: TaskCredentials;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskScheduledEventDetailsSchema: Schema<TaskScheduledEventDetails> =
  s.object<TaskScheduledEventDetails>(
    {
      resourceType: s.string(),
      resource: s.string(),
      region: s.string(),
      parameters: s.string(),
      timeoutInSeconds: s.optional(s.int()),
      heartbeatInSeconds: s.optional(s.int()),
      taskCredentials: s.optional(s.lazy(() => taskCredentialsSchema)),
    },
    { additionalProperties: s.json() },
  );
