import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This determines whether this is an external-link post or a regular announcement post. TEXT -
 * Regular announcement that can contain rich text. LINK - Announcement that is linked to an
 * external site.
 */
export const PostType = {
  Text: "TEXT",
  Link: "LINK",
} as const;
export type PostType = (typeof PostType)[keyof typeof PostType] | (string & {});

export const postTypeSchema: EnumSchema<PostType> = s.enumOf<PostType>(PostType);
