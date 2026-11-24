import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TaskRemoveTagRequest = {
  /** The tag to remove from the task. */
  tag: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRemoveTagRequestSchema: Schema<TaskRemoveTagRequest> = s.object<TaskRemoveTagRequest>(
  {
    tag: s.string(),
  },
  { additionalProperties: s.json() },
);
