import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyCompactSchema, type StoryCompact } from "./story-compact.js";

export type TasksStoriesResponse = {
  data?: StoryCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksStoriesResponseSchema: Schema<TasksStoriesResponse> = s.object<TasksStoriesResponse>(
  {
    data: s.optional(s.array(s.lazy(() => storyCompactSchema))),
  },
  { additionalProperties: s.json() },
);
