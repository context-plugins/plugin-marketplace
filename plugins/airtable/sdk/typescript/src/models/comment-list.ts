import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commentInternalSchema, commentSchema, type Comment } from "./comment.js";

/** A paginated list of comments on a record. */
export type CommentList = {
  comments: Comment[];
  /** Pagination cursor for the next page of results. */
  offset?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const commentListProperties: s.Shape<CommentList> = {
  comments: s.array(s.lazy(() => commentInternalSchema)),
  offset: s.optional(s.string()),
};

export const commentListInternalSchema: Schema<CommentList> = s.object<CommentList>(commentListProperties, {
  additionalProperties: s.json(),
});

export const commentListSchema: Schema<CommentList> = s.lazySchema(() =>
  s.object<CommentList>(
    {
      ...commentListProperties,
      comments: s.array(s.lazy(() => commentSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
