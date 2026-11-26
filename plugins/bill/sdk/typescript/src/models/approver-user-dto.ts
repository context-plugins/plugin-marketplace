import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** User Approvers for a bill approval policy. */
export type ApproverUserDto = {
  /** BILL-generated ID of the user. The value begins with `006`. */
  userId?: string;
  /** User full name */
  fullName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const approverUserDtoSchema: Schema<ApproverUserDto> = s.object<ApproverUserDto>(
  {
    userId: s.optional(s.string()),
    fullName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
