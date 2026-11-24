import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Approval configuration without recipients (recipients are tenant-scoped and removed at export).
 */
export type Approval = {
  required?: boolean;
  message?: string;
  rejectApprovalAfterTime?: boolean;
  rejectTimeValue?: number;
  rejectTimeUnit?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const approvalSchema: Schema<Approval> = s.object<Approval>(
  {
    required: s.optional(s.boolean()),
    message: s.optional(s.string()),
    rejectApprovalAfterTime: s.optional(s.boolean()),
    rejectTimeValue: s.optional(s.int()),
    rejectTimeUnit: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
