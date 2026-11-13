import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateStoryContentsInternalSchema,
  updateStoryContentsSchema,
  type UpdateStoryContents,
} from "./update-story-contents.js";

/**
 * Request parameters for changing either a template's name or any of the attributes it is designed
 * to pre-populate.
 */
export type UpdateEntityTemplate = {
  /** The updated template name. */
  name?: string;
  /** Updated attributes for the template to populate. */
  storyContents?: UpdateStoryContents;
};

const updateEntityTemplateProperties: s.Shape<UpdateEntityTemplate> = {
  name: s.optional(s.string()),
  storyContents: s.optional(s.lazy(() => updateStoryContentsInternalSchema)),
  _keysMap: {
    storyContents: "story_contents",
  },
};

export const updateEntityTemplateInternalSchema: Schema<UpdateEntityTemplate> =
  s.object<UpdateEntityTemplate>(updateEntityTemplateProperties);

export const updateEntityTemplateSchema: Schema<UpdateEntityTemplate> = s.lazySchema(() =>
  s.object<UpdateEntityTemplate>({
    ...updateEntityTemplateProperties,
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
    storyContents: s.optional(s.lazy(() => updateStoryContentsSchema)),
  }),
);
