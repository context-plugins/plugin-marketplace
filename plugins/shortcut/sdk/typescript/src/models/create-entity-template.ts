import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createStoryContentsInternalSchema,
  createStoryContentsSchema,
  type CreateStoryContents,
} from "./create-story-contents.js";

/** Request parameters for creating an entirely new entity template. */
export type CreateEntityTemplate = {
  /** The name of the new entity template */
  name: string;
  /** The id of the user creating this template. */
  authorId?: string;
  /** A map of story attributes this template populates. */
  storyContents: CreateStoryContents;
};

const createEntityTemplateProperties: s.Shape<CreateEntityTemplate> = {
  name: s.string(),
  authorId: s.optional(s.string()),
  storyContents: createStoryContentsInternalSchema,
  _keysMap: {
    authorId: "author_id",
    storyContents: "story_contents",
  },
};

export const createEntityTemplateInternalSchema: Schema<CreateEntityTemplate> =
  s.object<CreateEntityTemplate>(createEntityTemplateProperties);

export const createEntityTemplateSchema: Schema<CreateEntityTemplate> = s.lazySchema(() =>
  s.object<CreateEntityTemplate>({
    ...createEntityTemplateProperties,
    name: s.string().check(s.minLength(1), s.maxLength(128)),
    storyContents: createStoryContentsSchema,
  }),
);
