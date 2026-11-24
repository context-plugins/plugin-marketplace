import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approverGroupDtoSchema, type ApproverGroupDto } from "./approver-group-dto.js";
import { approverUserDtoSchema, type ApproverUserDto } from "./approver-user-dto.js";

export type Approvers = {
  /** List of approver users */
  users?: ApproverUserDto[];
  /** List of approval groups */
  groups?: ApproverGroupDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const approversSchema: Schema<Approvers> = s.object<Approvers>(
  {
    users: s.optional(s.array(s.lazy(() => approverUserDtoSchema))),
    groups: s.optional(s.array(s.lazy(() => approverGroupDtoSchema))),
  },
  { additionalProperties: s.json() },
);
