import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The next action that the bot should take in its interaction with the user. The possible values
 * are: ConfirmIntent - The next action is asking the user if the intent is complete and ready to be
 * fulfilled. This is a yes/no question such as "Place the order?" Close - Indicates that the there
 * will not be a response from the user. For example, the statement "Your order has been placed"
 * does not require a response. Delegate - The next action is determined by Amazon Lex. ElicitIntent
 * - The next action is to determine the intent that the user wants to fulfill. ElicitSlot - The
 * next action is to elicit
 */
export const Type2 = {
  ElicitIntent: "ElicitIntent",
  ConfirmIntent: "ConfirmIntent",
  ElicitSlot: "ElicitSlot",
  Close: "Close",
  Delegate: "Delegate",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
