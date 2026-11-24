import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskSchema, type Task } from "./task.js";

export type Data = {
  tasks?: Task[];
  updated?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    tasks: s.optional(s.array(s.lazy(() => taskSchema))),
    updated: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
