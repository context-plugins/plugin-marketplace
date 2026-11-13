import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createStoryParamsInternalSchema,
  createStoryParamsSchema,
  type CreateStoryParams,
} from "./create-story-params.js";

export type CreateStories = {
  /** An array of stories to be created. */
  stories: CreateStoryParams[];
};

const createStoriesProperties: s.Shape<CreateStories> = {
  stories: s.array(s.lazy(() => createStoryParamsInternalSchema)),
};

export const createStoriesInternalSchema: Schema<CreateStories> =
  s.object<CreateStories>(createStoriesProperties);

export const createStoriesSchema: Schema<CreateStories> = s.lazySchema(() =>
  s.object<CreateStories>({
    ...createStoriesProperties,
    stories: s.array(s.lazy(() => createStoryParamsSchema)),
  }),
);
