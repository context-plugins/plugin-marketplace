import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TasksResponse3 = {
  data?: Record<string, unknown>;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksResponse3Schema: Schema<TasksResponse3> = s.object<TasksResponse3>(
  {
    data: s.optional(s.record(s.string(), s.unknown())),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
