import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { matchedUserSchema, type MatchedUser } from "./matched-user.js";

export type UserMatch = {
  /** Describes the UserID metadata. */
  similarity?: number;
  user?: MatchedUser;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userMatchSchema: Schema<UserMatch> = s.object<UserMatch>(
  {
    similarity: s.optional(s.float64()),
    user: s.optional(s.lazy(() => matchedUserSchema)),
    _keysMap: {
      similarity: "Similarity",
      user: "User",
    },
  },
  { additionalProperties: s.json() },
);
