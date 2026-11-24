import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The call-to-action button type */
export const CallToActionType1 = {
  LearnMore: "LEARN_MORE",
  ShopNow: "SHOP_NOW",
  SignUp: "SIGN_UP",
  BookNow: "BOOK_NOW",
  Download: "DOWNLOAD",
  GetOffer: "GET_OFFER",
  ContactUs: "CONTACT_US",
  Subscribe: "SUBSCRIBE",
} as const;
export type CallToActionType1 = (typeof CallToActionType1)[keyof typeof CallToActionType1] | (string & {});

export const callToActionType1Schema: EnumSchema<CallToActionType1> =
  s.enumOf<CallToActionType1>(CallToActionType1);
