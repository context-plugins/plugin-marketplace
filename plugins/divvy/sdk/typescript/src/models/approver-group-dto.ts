import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { groupUsersSchema, type GroupUsers } from "./group-users.js";

/** Groups containing users. */
export type ApproverGroupDto = {
  /** Approval group name */
  groupName?: string;
  /** BILL-generated ID of the approval group. The value begins with `agp`. */
  groupId?: string;
  /** Approval group user information */
  users?: GroupUsers[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const approverGroupDtoSchema: Schema<ApproverGroupDto> = s.object<ApproverGroupDto>(
  {
    groupName: s.optional(s.string()),
    groupId: s.optional(s.string()),
    users: s.optional(s.array(s.lazy(() => groupUsersSchema))),
  },
  { additionalProperties: s.json() },
);
