import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardRedemptionStatus2Schema,
  type GiftCardRedemptionStatus2,
} from "./gift-card-redemption-status2.js";
import { transactionGiftCard2Schema, type TransactionGiftCard2 } from "./transaction-gift-card2.js";
import { Type34, type34Schema } from "./type34.js";
import { errorCodeModelSchema, type ErrorCodeModel } from "./unions/error-code-model.js";
import {
  giftCardServiceRedemptionIdSchema,
  type GiftCardServiceRedemptionId,
} from "./unions/gift-card-service-redemption-id.js";
import { rawErrorCodeSchema, type RawErrorCode } from "./unions/raw-error-code.js";
import { rawErrorMessageSchema, type RawErrorMessage } from "./unions/raw-error-message.js";

export type GiftCardRedemption = {
  /** Always `gift-card-redemption`. @default Type34.GiftCardRedemption */
  type?: Type34;
  /** The ID for the gift card redemption. */
  id: string;
  /** The status of the gift card redemption for the `payment_method`. */
  status: GiftCardRedemptionStatus2;
  /** The amount redeemed for this gift card. */
  amount: number;
  /** The amount refunded for this gift card. This can not be larger than `amount`. */
  refundedAmount: number;
  /** The gift card service's unique ID for the redemption. */
  giftCardServiceRedemptionId?: GiftCardServiceRedemptionId;
  /**
   * If this gift card redemption resulted in an error, this will contain the internal code for the
   * error.
   */
  errorCode?: ErrorCodeModel;
  /**
   * If this gift card redemption resulted in an error, this will contain the raw error code
   * received from the gift card provider.
   */
  rawErrorCode?: RawErrorCode;
  /**
   * If this gift card redemption resulted in an error, this will contain the raw error message
   * received from the gift card provider.
   */
  rawErrorMessage?: RawErrorMessage;
  /** The gift card used for this redemption */
  giftCard: TransactionGiftCard2;
};

export const giftCardRedemptionSchema: Schema<GiftCardRedemption> = s.object<GiftCardRedemption>({
  type: s.defaulted(type34Schema, Type34.GiftCardRedemption),
  id: s.string(),
  status: giftCardRedemptionStatus2Schema,
  amount: s.int(),
  refundedAmount: s.int(),
  giftCardServiceRedemptionId: s.optional(s.lazy(() => giftCardServiceRedemptionIdSchema)),
  errorCode: s.optional(s.lazy(() => errorCodeModelSchema)),
  rawErrorCode: s.optional(s.lazy(() => rawErrorCodeSchema)),
  rawErrorMessage: s.optional(s.lazy(() => rawErrorMessageSchema)),
  giftCard: transactionGiftCard2Schema,
  _keysMap: {
    refundedAmount: "refunded_amount",
    giftCardServiceRedemptionId: "gift_card_service_redemption_id",
    errorCode: "error_code",
    rawErrorCode: "raw_error_code",
    rawErrorMessage: "raw_error_message",
    giftCard: "gift_card",
  },
});
