import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A group assigned to a policy */
export type AssignedGroup = {
  /** Email address of the assigned group */
  email: string;
  /** Display name of the assigned group */
  name: string;
  /** Number of members in the group */
  membersCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assignedGroupSchema: Schema<AssignedGroup> = s.object<AssignedGroup>(
  {
    email: s.string(),
    name: s.string(),
    membersCount: s.int(),
  },
  { additionalProperties: s.json() },
);
