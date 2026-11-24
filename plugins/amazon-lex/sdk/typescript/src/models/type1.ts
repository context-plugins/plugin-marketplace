import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The next action that the bot should take in its interaction with the user. The following values
 * are possible: Close – Indicates that there will not be a response from the user. For example, the
 * statement "Your order has been placed" does not require a response. ConfirmIntent – The next
 * action is asking the user if the intent is complete and ready to be fulfilled. This is a yes/no
 * question such as "Place the order?" Delegate – The next action is determined by Amazon Lex V2.
 * ElicitIntent – The next action is to elicit an intent from the user. ElicitSlot – The next action
 * is to elicit a slot valu
 */
export const Type1 = {
  Close: "Close",
  ConfirmIntent: "ConfirmIntent",
  Delegate: "Delegate",
  ElicitIntent: "ElicitIntent",
  ElicitSlot: "ElicitSlot",
  None: "None",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
