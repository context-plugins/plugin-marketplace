import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorInternalSchema, authorSchema, type Author } from "./author.js";

/** A comment on an Airtable record. */
export type Comment = {
  /** The unique identifier of the comment. */
  id: string;
  /** The user who created the comment. */
  author?: Author;
  /** The text content of the comment. */
  text: string;
  /** The time when the comment was created. */
  createdTime: Date;
  /** The time when the comment was last updated. */
  lastUpdatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const commentProperties: s.Shape<Comment> = {
  id: s.string(),
  author: s.optional(s.lazy(() => authorInternalSchema)),
  text: s.string(),
  createdTime: s.dateTime(),
  lastUpdatedTime: s.optional(s.dateTime()),
};

export const commentInternalSchema: Schema<Comment> = s.object<Comment>(commentProperties, {
  additionalProperties: s.json(),
});

export const commentSchema: Schema<Comment> = s.lazySchema(() =>
  s.object<Comment>(
    {
      ...commentProperties,
      author: s.optional(s.lazy(() => authorSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
