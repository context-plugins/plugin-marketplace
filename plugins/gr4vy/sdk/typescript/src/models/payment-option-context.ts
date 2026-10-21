import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approvalUiSchema, type ApprovalUi } from "./unions/approval-ui.js";
import { requiredFields1Schema, type RequiredFields1 } from "./unions/required-fields1.js";

export type PaymentOptionContext = {
  approvalUi?: ApprovalUi;
  requiredFields?: RequiredFields1;
  redirectRequiresPopup: boolean;
  requiresTokenizedRedirectPopup: boolean;
};

export const paymentOptionContextSchema: Schema<PaymentOptionContext> = s.object<PaymentOptionContext>({
  approvalUi: s.optional(s.lazy(() => approvalUiSchema)),
  requiredFields: s.optional(s.lazy(() => requiredFields1Schema)),
  redirectRequiresPopup: s.boolean(),
  requiresTokenizedRedirectPopup: s.boolean(),
  _keysMap: {
    approvalUi: "approval_ui",
    requiredFields: "required_fields",
    redirectRequiresPopup: "redirect_requires_popup",
    requiresTokenizedRedirectPopup: "requires_tokenized_redirect_popup",
  },
});
