import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyDetailSchema, type StoryDetail } from "./story-detail.js";

export type ApiV1StoriesResponse1 = {
  story?: StoryDetail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1StoriesResponse1Schema: Schema<ApiV1StoriesResponse1> = s.object<ApiV1StoriesResponse1>(
  {
    story: s.optional(s.lazy(() => storyDetailSchema)),
  },
  { additionalProperties: s.json() },
);
