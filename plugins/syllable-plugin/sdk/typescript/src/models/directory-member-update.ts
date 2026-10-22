import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentsSchema, type Comments } from "./unions/comments.js";
import { contactTagsSchema, type ContactTags } from "./unions/contact-tags.js";
import { extensionsSchema, type Extensions } from "./unions/extensions.js";

/** Request model to update a directory member. */
export type DirectoryMemberUpdate = {
  /** Name of the directory member */
  name: string;
  /** Type of the directory member */
  type: string;
  /** List of extensions for the directory member */
  extensions?: Extensions;
  /** Tags for the directory member */
  contactTags?: ContactTags;
  /** The comments for the most recent edit to the directory member */
  comments?: Comments;
  /** Internal ID of the directory member */
  id: number;
};

export const directoryMemberUpdateSchema: Schema<DirectoryMemberUpdate> = s.object<DirectoryMemberUpdate>({
  name: s.string(),
  type: s.string(),
  extensions: s.optional(s.lazy(() => extensionsSchema)),
  contactTags: s.optional(s.lazy(() => contactTagsSchema)),
  comments: s.optional(s.lazy(() => commentsSchema)),
  id: s.int(),
  _keysMap: {
    contactTags: "contact_tags",
  },
});
