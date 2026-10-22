import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refundTargetType2Schema, type RefundTargetType2 } from "./refund-target-type2.js";
import { amount10Schema, type Amount10 } from "./unions/amount10.js";
import { externalIdentifier29Schema, type ExternalIdentifier29 } from "./unions/external-identifier29.js";
import { reason2Schema, type Reason2 } from "./unions/reason2.js";
import { targetId1Schema, type TargetId1 } from "./unions/target-id1.js";

export type TransactionRefundCreate = {
  /**
   * The amount to refund, in the smallest currency unit (e.g., cents). If omitted, a full refund
   * will be requested.
   */
  amount?: Amount10;
  /**
   * The target type to refund for. This can be used to target a gift card to refund to instead of
   * the main payment method.
   */
  targetType?: RefundTargetType2;
  /**
   * The optional ID of the instrument to refund for. This is only required when the `target_type`
   * is set to `gift-card-redemption`.
   */
  targetId?: TargetId1;
  /** An optional reason to attach extra context to the refund request. */
  reason?: Reason2;
  /** An external identifier that can be used to match the refund against your own records. */
  externalIdentifier?: ExternalIdentifier29;
};

export const transactionRefundCreateSchema: Schema<TransactionRefundCreate> =
  s.object<TransactionRefundCreate>({
    amount: s.optional(s.lazy(() => amount10Schema)),
    targetType: s.optional(s.lazy(() => refundTargetType2Schema)),
    targetId: s.optional(s.lazy(() => targetId1Schema)),
    reason: s.optional(s.lazy(() => reason2Schema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier29Schema)),
    _keysMap: {
      targetType: "target_type",
      targetId: "target_id",
      externalIdentifier: "external_identifier",
    },
  });
