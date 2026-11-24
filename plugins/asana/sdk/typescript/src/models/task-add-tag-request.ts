import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskAddTagRequest = {
  /** The tag to add to the task. */
  tag: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskAddTagRequestSchema: Schema<TaskAddTagRequest> = s.object<TaskAddTagRequest>(
  {
    tag: s.string(),
  },
  { additionalProperties: s.json() },
);
