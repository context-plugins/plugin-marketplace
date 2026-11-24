import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallToActionType = {
  Book: "BOOK",
  Order: "ORDER",
  Shop: "SHOP",
  LearnMore: "LEARN_MORE",
  SignUp: "SIGN_UP",
  Call: "CALL",
} as const;
export type CallToActionType = (typeof CallToActionType)[keyof typeof CallToActionType] | (string & {});

export const callToActionTypeSchema: EnumSchema<CallToActionType> =
  s.enumOf<CallToActionType>(CallToActionType);
