import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentsSchema, type Comments } from "./unions/comments.js";
import { contactTagsSchema, type ContactTags } from "./unions/contact-tags.js";
import { createdBySchema, type CreatedBy } from "./unions/created-by.js";
import { deletedAt2Schema, type DeletedAt2 } from "./unions/deleted-at2.js";
import { extensionsSchema, type Extensions } from "./unions/extensions.js";
import { lastUpdatedBy4Schema, type LastUpdatedBy4 } from "./unions/last-updated-by4.js";

/** Model for a directory member (i.e. a contact). */
export type DirectoryMember = {
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
  /** When the contact was created */
  createdAt: Date;
  /** Timestamp of most recent update */
  updatedAt: Date;
  /** When the contact was deleted, if deleted */
  deletedAt?: DeletedAt2;
  /** Email of the user who last updated the directory member */
  lastUpdatedBy?: LastUpdatedBy4;
  /** Email of the user who created the directory member */
  createdBy?: CreatedBy;
};

export const directoryMemberSchema: Schema<DirectoryMember> = s.object<DirectoryMember>({
  name: s.string(),
  type: s.string(),
  extensions: s.optional(s.lazy(() => extensionsSchema)),
  contactTags: s.optional(s.lazy(() => contactTagsSchema)),
  comments: s.optional(s.lazy(() => commentsSchema)),
  id: s.int(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  deletedAt: s.optional(s.lazy(() => deletedAt2Schema)),
  lastUpdatedBy: s.optional(s.lazy(() => lastUpdatedBy4Schema)),
  createdBy: s.optional(s.lazy(() => createdBySchema)),
  _keysMap: {
    contactTags: "contact_tags",
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    lastUpdatedBy: "last_updated_by",
    createdBy: "created_by",
  },
});
