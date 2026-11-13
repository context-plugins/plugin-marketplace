import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteStories = {
  /** An array of IDs of Stories to delete. */
  storyIds: number[];
};

const deleteStoriesProperties: s.Shape<DeleteStories> = {
  storyIds: s.array(s.int()),
  _keysMap: {
    storyIds: "story_ids",
  },
};

export const deleteStoriesInternalSchema: Schema<DeleteStories> =
  s.object<DeleteStories>(deleteStoriesProperties);

export const deleteStoriesSchema: Schema<DeleteStories> = s.lazySchema(() =>
  s.object<DeleteStories>({
    ...deleteStoriesProperties,
    storyIds: s.array(s.int()).check(s.uniqueItems()),
  }),
);
