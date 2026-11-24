import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The author type. */
export const AuthorType2 = {
  User: "user",
  GuestAuthor: "guest_author",
} as const;
export type AuthorType2 = (typeof AuthorType2)[keyof typeof AuthorType2] | (string & {});

export const authorType2Schema: EnumSchema<AuthorType2> = s.enumOf<AuthorType2>(AuthorType2);
