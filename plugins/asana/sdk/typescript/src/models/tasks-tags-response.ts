import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagCompactSchema, type TagCompact } from "./tag-compact.js";

export type TasksTagsResponse = {
  data?: TagCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksTagsResponseSchema: Schema<TasksTagsResponse> = s.object<TasksTagsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => tagCompactSchema))),
  },
  { additionalProperties: s.json() },
);
