import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type User2 = {
  /** The unique identifier of the user */
  id?: string;
  /** The login name of the user */
  login?: string;
  /** The display name of the user */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const user2Schema: Schema<User2> = s.object<User2>(
  {
    id: s.optional(s.string()),
    login: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
