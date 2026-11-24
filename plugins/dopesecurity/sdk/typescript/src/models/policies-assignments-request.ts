import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PoliciesAssignmentsRequest = {
  /** User emails to assign. Omit to leave unchanged, send [] to unassign all. */
  users?: string[];
  /** Group emails to assign. Omit to leave unchanged, send [] to unassign all. */
  groups?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policiesAssignmentsRequestSchema: Schema<PoliciesAssignmentsRequest> =
  s.object<PoliciesAssignmentsRequest>(
    {
      users: s.optional(s.array(s.string())),
      groups: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
