import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateStoryComment = {
  /** The comment text. */
  text: string;
  /** The Member ID of the Comment's author. Defaults to the user identified by the API token. */
  authorId?: string;
  /** Defaults to the time/date the comment is created, but can be set to reflect another date. */
  createdAt?: Date;
  /**
   * Defaults to the time/date the comment is last updated, but can be set to reflect another date.
   */
  updatedAt?: Date;
  /**
   * This field can be set to another unique ID. In the case that the comment has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
  /** The ID of the Comment that this comment is threaded under. */
  parentId?: number | null;
};

const createStoryCommentProperties: s.Shape<CreateStoryComment> = {
  text: s.string(),
  authorId: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  externalId: s.optional(s.string()),
  parentId: s.optionalNullable(s.int()),
  _keysMap: {
    authorId: "author_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    externalId: "external_id",
    parentId: "parent_id",
  },
};

export const createStoryCommentInternalSchema: Schema<CreateStoryComment> = s.object<CreateStoryComment>(
  createStoryCommentProperties,
);

export const createStoryCommentSchema: Schema<CreateStoryComment> = s.lazySchema(() =>
  s.object<CreateStoryComment>({
    ...createStoryCommentProperties,
    text: s.string().check(s.maxLength(100000)),
    externalId: s.optional(s.string().check(s.maxLength(1024))),
  }),
);
