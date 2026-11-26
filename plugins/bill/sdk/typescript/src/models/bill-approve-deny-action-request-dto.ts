import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billApproveDenyActionSchema, type BillApproveDenyAction } from "./bill-approve-deny-action.js";

/** Bill approve/deny action request */
export type BillApproveDenyActionRequestDto = {
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  billId: string;
  action: BillApproveDenyAction;
  /** Reason of the decision */
  comment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billApproveDenyActionRequestDtoSchema: Schema<BillApproveDenyActionRequestDto> =
  s.object<BillApproveDenyActionRequestDto>(
    {
      billId: s.string(),
      action: billApproveDenyActionSchema,
      comment: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
