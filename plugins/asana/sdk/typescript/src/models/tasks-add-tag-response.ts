import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TasksAddTagResponse = {
  /**
   * An empty object. Some endpoints do not return an object on success. The success is conveyed
   * through a 2-- status code and returning an empty object.
   */
  data?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksAddTagResponseSchema: Schema<TasksAddTagResponse> = s.object<TasksAddTagResponse>(
  {
    data: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
