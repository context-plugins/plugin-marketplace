import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyCardInternalSchema, storyCardSchema, type StoryCard } from "./story-card.js";

export type StoriesPage = {
  results: StoryCard[];
  /** Opaque cursor for the next (older) page; `null` at the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storiesPageProperties: s.Shape<StoriesPage> = {
  results: s.array(s.lazy(() => storyCardInternalSchema)),
  nextCursor: s.nullable(s.string()),
  _keysMap: {
    nextCursor: "next_cursor",
  },
};

export const storiesPageInternalSchema: Schema<StoriesPage> = s.object<StoriesPage>(storiesPageProperties, {
  additionalProperties: s.json(),
});

export const storiesPageSchema: Schema<StoriesPage> = s.lazySchema(() =>
  s.object<StoriesPage>(
    {
      ...storiesPageProperties,
      results: s.array(s.lazy(() => storyCardSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
