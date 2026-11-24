import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuthorType = {
  User: "user",
  GuestAuthor: "guest_author",
} as const;
export type AuthorType = (typeof AuthorType)[keyof typeof AuthorType] | (string & {});

export const authorTypeSchema: EnumSchema<AuthorType> = s.enumOf<AuthorType>(AuthorType);
