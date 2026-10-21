import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  paymentOptionContextApprovalUiSchema,
  type PaymentOptionContextApprovalUi,
} from "../payment-option-context-approval-ui.js";

export type ApprovalUi = PaymentOptionContextApprovalUi;

export const approvalUiSchema: Schema<ApprovalUi> = s.of<ApprovalUi>(
  s.union([s.lazy(() => paymentOptionContextApprovalUiSchema)]),
);
