import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The user who created the comment. */
export type Author = {
  /** The user ID of the comment author. */
  id?: string;
  /** The email address of the comment author. */
  email?: string;
  /** The display name of the comment author. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authorProperties: s.Shape<Author> = {
  id: s.optional(s.string()),
  email: s.optional(s.string()),
  name: s.optional(s.string()),
};

export const authorInternalSchema: Schema<Author> = s.object<Author>(authorProperties, {
  additionalProperties: s.json(),
});

export const authorSchema: Schema<Author> = s.lazySchema(() =>
  s.object<Author>(
    {
      ...authorProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
