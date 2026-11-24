import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyRequestSchema, type StoryRequest } from "./story-request.js";

export type StoriesRequest = {
  data?: StoryRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storiesRequestSchema: Schema<StoriesRequest> = s.object<StoriesRequest>(
  {
    data: s.optional(s.lazy(() => storyRequestSchema)),
  },
  { additionalProperties: s.json() },
);
