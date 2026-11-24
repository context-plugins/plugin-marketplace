import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyResponseSchema, type StoryResponse } from "./story-response.js";

export type TasksStoriesResponse1 = {
  data?: StoryResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksStoriesResponse1Schema: Schema<TasksStoriesResponse1> = s.object<TasksStoriesResponse1>(
  {
    data: s.optional(s.lazy(() => storyResponseSchema)),
  },
  { additionalProperties: s.json() },
);
