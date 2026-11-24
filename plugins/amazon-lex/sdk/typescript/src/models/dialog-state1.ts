import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * ConfirmIntent - Amazon Lex is expecting a "yes" or "no" response to confirm the intent before
 * fulfilling an intent. ElicitIntent - Amazon Lex wants to elicit the user's intent. ElicitSlot -
 * Amazon Lex is expecting the value of a slot for the current intent. Failed - Conveys that the
 * conversation with the user has failed. This can happen for various reasons, including the user
 * does not provide an appropriate response to prompts from the service, or if the Lambda function
 * fails to fulfill the intent. Fulfilled - Conveys that the Lambda function has sucessfully
 * fulfilled the intent. ReadyForFulfi
 */
export const DialogState1 = {
  ElicitIntent: "ElicitIntent",
  ConfirmIntent: "ConfirmIntent",
  ElicitSlot: "ElicitSlot",
  Fulfilled: "Fulfilled",
  ReadyForFulfillment: "ReadyForFulfillment",
  Failed: "Failed",
} as const;
export type DialogState1 = (typeof DialogState1)[keyof typeof DialogState1] | (string & {});

export const dialogState1Schema: EnumSchema<DialogState1> = s.enumOf<DialogState1>(DialogState1);
