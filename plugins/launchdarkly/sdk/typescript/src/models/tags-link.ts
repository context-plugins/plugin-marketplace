import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TagsLink = {
  href?: string;
  type?: string;
};

export const tagsLinkSchema: Schema<TagsLink> = s.object<TagsLink>({
  href: s.optional(s.string()),
  type: s.optional(s.string()),
});
