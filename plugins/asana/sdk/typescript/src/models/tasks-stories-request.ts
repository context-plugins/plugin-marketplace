import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyRequestSchema, type StoryRequest } from "./story-request.js";

export type TasksStoriesRequest = {
  data?: StoryRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksStoriesRequestSchema: Schema<TasksStoriesRequest> = s.object<TasksStoriesRequest>(
  {
    data: s.optional(s.lazy(() => storyRequestSchema)),
  },
  { additionalProperties: s.json() },
);
