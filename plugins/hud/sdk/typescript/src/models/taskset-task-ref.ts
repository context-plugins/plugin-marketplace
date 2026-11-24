import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TasksetTaskRef = {
  id: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksetTaskRefSchema: Schema<TasksetTaskRef> = s.object<TasksetTaskRef>(
  {
    id: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
