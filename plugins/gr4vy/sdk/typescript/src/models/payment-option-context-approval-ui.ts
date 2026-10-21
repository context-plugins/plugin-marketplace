import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { heightSchema, type Height } from "./unions/height.js";
import { widthSchema, type Width } from "./unions/width.js";

export type PaymentOptionContextApprovalUi = {
  height?: Height;
  width?: Width;
};

export const paymentOptionContextApprovalUiSchema: Schema<PaymentOptionContextApprovalUi> =
  s.object<PaymentOptionContextApprovalUi>({
    height: s.optional(s.lazy(() => heightSchema)),
    width: s.optional(s.lazy(() => widthSchema)),
  });
