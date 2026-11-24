import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The account the key belongs to */
export type User = {
  /** Account ID */
  id: number;
  /** Account email */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userSchema: Schema<User> = s.object<User>(
  {
    id: s.int(),
    email: s.string(),
  },
  { additionalProperties: s.json() },
);
