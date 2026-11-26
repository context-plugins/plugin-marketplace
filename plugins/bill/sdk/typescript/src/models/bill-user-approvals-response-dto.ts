import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Bill User Approvals Response Dto. */
export type BillUserApprovalsResponseDto = {
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  billId: string;
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId: string;
  /** Bill amount. This value is in USD. */
  amount?: number;
  /** Bill due date. The value is in the `yyyy-MM-dd` format. */
  dueDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const billUserApprovalsResponseDtoSchema: Schema<BillUserApprovalsResponseDto> =
  s.object<BillUserApprovalsResponseDto>(
    {
      billId: s.string(),
      vendorId: s.string(),
      amount: s.optional(s.float64()),
      dueDate: s.optional(s.dateOnly()),
    },
    { additionalProperties: s.json() },
  );
