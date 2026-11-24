import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallToActionType = {
  LearnMore: "LEARN_MORE",
  ShopNow: "SHOP_NOW",
  SignUp: "SIGN_UP",
  BookNow: "BOOK_NOW",
  Download: "DOWNLOAD",
  GetOffer: "GET_OFFER",
  ContactUs: "CONTACT_US",
  Subscribe: "SUBSCRIBE",
} as const;
export type CallToActionType = (typeof CallToActionType)[keyof typeof CallToActionType] | (string & {});

export const callToActionTypeSchema: EnumSchema<CallToActionType> =
  s.enumOf<CallToActionType>(CallToActionType);
