import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { storyContentsInternalSchema, storyContentsSchema, type StoryContents } from "./story-contents.js";

/** An entity template can be used to prefill various fields when creating new stories. */
export type EntityTemplate = {
  /** A string description of this resource. */
  entityType: string;
  /** The unique identifier for the entity template. */
  id: string;
  /** The time/date when the entity template was created. */
  createdAt: Date;
  /** The time/date when the entity template was last updated. */
  updatedAt: Date;
  /** The template's name. */
  name: string;
  /** The unique ID of the member who created the template. */
  authorId: string;
  /** The last time that someone created an entity using this template. */
  lastUsedAt: Date;
  /** A container entity for the attributes this template should populate. */
  storyContents: StoryContents;
};

const entityTemplateProperties: s.Shape<EntityTemplate> = {
  entityType: s.string(),
  id: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  name: s.string(),
  authorId: s.string(),
  lastUsedAt: s.dateTime(),
  storyContents: storyContentsInternalSchema,
  _keysMap: {
    entityType: "entity_type",
    createdAt: "created_at",
    updatedAt: "updated_at",
    authorId: "author_id",
    lastUsedAt: "last_used_at",
    storyContents: "story_contents",
  },
};

export const entityTemplateInternalSchema: Schema<EntityTemplate> =
  s.object<EntityTemplate>(entityTemplateProperties);

export const entityTemplateSchema: Schema<EntityTemplate> = s.lazySchema(() =>
  s.object<EntityTemplate>({
    ...entityTemplateProperties,
    storyContents: storyContentsSchema,
  }),
);
