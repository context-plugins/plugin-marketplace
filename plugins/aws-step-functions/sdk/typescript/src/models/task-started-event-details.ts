import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskStartedEventDetails = {
  /** The service name of the resource in a task state. */
  resourceType: string;
  /** The action of the resource called by a task state. */
  resource: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskStartedEventDetailsSchema: Schema<TaskStartedEventDetails> =
  s.object<TaskStartedEventDetails>(
    {
      resourceType: s.string(),
      resource: s.string(),
    },
    { additionalProperties: s.json() },
  );
