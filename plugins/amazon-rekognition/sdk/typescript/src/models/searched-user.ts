import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchedUser = {
  /** A provided ID for the UserID. Unique within the collection. */
  userId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchedUserSchema: Schema<SearchedUser> = s.object<SearchedUser>(
  {
    userId: s.optional(s.string()),
    _keysMap: {
      userId: "UserId",
    },
  },
  { additionalProperties: s.json() },
);
