import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskSchema, type Task } from "./task.js";

export type ApiV1TasksResponse2 = {
  tasks: Task[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TasksResponse2Schema: Schema<ApiV1TasksResponse2> = s.object<ApiV1TasksResponse2>(
  {
    tasks: s.array(s.lazy(() => taskSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
