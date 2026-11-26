import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User = {
  /** This field is set as `true` if you can make online payments */
  payOnline?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userSchema: Schema<User> = s.object<User>(
  {
    payOnline: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
