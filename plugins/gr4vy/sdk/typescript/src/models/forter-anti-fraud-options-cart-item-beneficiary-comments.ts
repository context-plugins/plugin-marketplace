import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantCommentsSchema, type MerchantComments } from "./unions/merchant-comments.js";
import { messageToBeneficiarySchema, type MessageToBeneficiary } from "./unions/message-to-beneficiary.js";
import {
  userCommentsToMerchantSchema,
  type UserCommentsToMerchant,
} from "./unions/user-comments-to-merchant.js";

export type ForterAntiFraudOptionsCartItemBeneficiaryComments = {
  /** Comments from the user to the merchant. */
  userCommentsToMerchant?: UserCommentsToMerchant;
  /** Message intended for the beneficiary of the item. */
  messageToBeneficiary?: MessageToBeneficiary;
  /** Comments from the merchant about this transaction. */
  merchantComments?: MerchantComments;
};

export const forterAntiFraudOptionsCartItemBeneficiaryCommentsSchema: Schema<ForterAntiFraudOptionsCartItemBeneficiaryComments> =
  s.object<ForterAntiFraudOptionsCartItemBeneficiaryComments>({
    userCommentsToMerchant: s.optional(s.lazy(() => userCommentsToMerchantSchema)),
    messageToBeneficiary: s.optional(s.lazy(() => messageToBeneficiarySchema)),
    merchantComments: s.optional(s.lazy(() => merchantCommentsSchema)),
    _keysMap: {
      userCommentsToMerchant: "user_comments_to_merchant",
      messageToBeneficiary: "message_to_beneficiary",
      merchantComments: "merchant_comments",
    },
  });
