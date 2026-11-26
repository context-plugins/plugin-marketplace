import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyCardInternalSchema, storyCardSchema, type StoryCard } from "./story-card.js";

export type TopStories = {
  results: StoryCard[];
  /** When the list was ranked. */
  asOf: Date;
  /** The ranking formula's version; a change to the formula increments it. */
  rankingVersion: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const topStoriesProperties: s.Shape<TopStories> = {
  results: s.array(s.lazy(() => storyCardInternalSchema)),
  asOf: s.dateTime(),
  rankingVersion: s.int(),
  _keysMap: {
    asOf: "as_of",
    rankingVersion: "ranking_version",
  },
};

export const topStoriesInternalSchema: Schema<TopStories> = s.object<TopStories>(topStoriesProperties, {
  additionalProperties: s.json(),
});

export const topStoriesSchema: Schema<TopStories> = s.lazySchema(() =>
  s.object<TopStories>(
    {
      ...topStoriesProperties,
      results: s.array(s.lazy(() => storyCardSchema)).check(s.maxLength(50)),
    },
    { additionalProperties: s.json() },
  ),
);
