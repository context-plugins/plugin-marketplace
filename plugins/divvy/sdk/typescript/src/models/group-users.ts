import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Users that are part of an approval group. */
export type GroupUsers = {
  /** BILL-generated ID of the user. The value begins with `006`. */
  id?: string;
  /** User full name */
  fullName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupUsersSchema: Schema<GroupUsers> = s.object<GroupUsers>(
  {
    id: s.optional(s.string()),
    fullName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
