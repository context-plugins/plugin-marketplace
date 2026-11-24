import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateEpicComment = {
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
};

const createEpicCommentProperties: s.Shape<CreateEpicComment> = {
  text: s.string(),
  authorId: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  externalId: s.optional(s.string()),
  _keysMap: {
    authorId: "author_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    externalId: "external_id",
  },
};

export const createEpicCommentInternalSchema: Schema<CreateEpicComment> =
  s.object<CreateEpicComment>(createEpicCommentProperties);

export const createEpicCommentSchema: Schema<CreateEpicComment> = s.lazySchema(() =>
  s.object<CreateEpicComment>({
    ...createEpicCommentProperties,
    text: s.string().check(s.minLength(1), s.maxLength(100000)),
    externalId: s.optional(s.string().check(s.maxLength(128))),
  }),
);
