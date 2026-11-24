import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

/** An object to represent a user's like. */
export type Like = {
  /** Globally unique identifier of the object, as a string. */
  gid?: string;
  user?: UserCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const likeSchema: Schema<Like> = s.object<Like>(
  {
    gid: s.optional(s.string()),
    user: s.optional(s.lazy(() => userCompactSchema)),
  },
  { additionalProperties: s.json() },
);
