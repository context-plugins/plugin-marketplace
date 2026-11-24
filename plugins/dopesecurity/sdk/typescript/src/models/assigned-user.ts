import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A user assigned to a policy */
export type AssignedUser = {
  /** Email address of the assigned user */
  email: string;
  /** Display name of the assigned user */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assignedUserSchema: Schema<AssignedUser> = s.object<AssignedUser>(
  {
    email: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
