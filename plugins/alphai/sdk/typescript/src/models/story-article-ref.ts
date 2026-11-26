import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StoryArticleRef = {
  uid: string;
  title: string;
  timePublished: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyArticleRefSchema: Schema<StoryArticleRef> = s.object<StoryArticleRef>(
  {
    uid: s.string(),
    title: s.string(),
    timePublished: s.dateTime(),
    _keysMap: {
      timePublished: "time_published",
    },
  },
  { additionalProperties: s.json() },
);
