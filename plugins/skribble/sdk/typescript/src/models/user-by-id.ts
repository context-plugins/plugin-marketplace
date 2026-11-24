import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserById = {
  /** Unique user identifier. */
  userId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userByIdSchema: Schema<UserById> = s.object<UserById>(
  {
    userId: s.string(),
    _keysMap: {
      userId: "user_id",
    },
  },
  { additionalProperties: s.json() },
);
