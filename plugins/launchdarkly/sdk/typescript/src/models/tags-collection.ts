import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tagsLinkSchema, type TagsLink } from "./tags-link.js";

export type TagsCollection = {
  /** List of tags */
  items: string[];
  links: Record<string, TagsLink>;
  /** The total number of tags */
  totalCount?: number;
};

export const tagsCollectionSchema: Schema<TagsCollection> = s.object<TagsCollection>({
  items: s.array(s.string()),
  links: s.record(
    s.string(),
    s.lazy(() => tagsLinkSchema),
  ),
  totalCount: s.optional(s.int()),
  _keysMap: {
    links: "_links",
  },
});
