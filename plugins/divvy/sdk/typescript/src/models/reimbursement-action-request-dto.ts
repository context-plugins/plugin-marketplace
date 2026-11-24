import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reimbursementActionTypeSchema, type ReimbursementActionType } from "./reimbursement-action-type.js";

/** Approve or deny a reimbursement */
export type ReimbursementActionRequestDto = {
  action: ReimbursementActionType;
  /** Reimbursement action note */
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reimbursementActionRequestDtoSchema: Schema<ReimbursementActionRequestDto> =
  s.object<ReimbursementActionRequestDto>(
    {
      action: reimbursementActionTypeSchema,
      note: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
