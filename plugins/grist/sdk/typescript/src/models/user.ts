import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User = {
  id: number;
  name: string;
  picture: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userSchema: Schema<User> = s.object<User>(
  {
    id: s.int(),
    name: s.string(),
    picture: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
