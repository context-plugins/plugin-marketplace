import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyResponseSchema, type StoryResponse } from "./story-response.js";

export type StoriesResponse = {
  data?: StoryResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storiesResponseSchema: Schema<StoriesResponse> = s.object<StoriesResponse>(
  {
    data: s.optional(s.lazy(() => storyResponseSchema)),
  },
  { additionalProperties: s.json() },
);
