import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { assignedGroupSchema, type AssignedGroup } from "./assigned-group.js";
import { assignedUserSchema, type AssignedUser } from "./assigned-user.js";

export type Data4 = {
  users: AssignedUser[];
  groups: AssignedGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data4Schema: Schema<Data4> = s.object<Data4>(
  {
    users: s.array(s.lazy(() => assignedUserSchema)),
    groups: s.array(s.lazy(() => assignedGroupSchema)),
  },
  { additionalProperties: s.json() },
);
