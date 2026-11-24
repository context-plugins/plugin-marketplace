import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Identifies the current state of the user interaction. Amazon Lex returns one of the following
 * values as dialogState. The client can optionally use this information to customize the user
 * interface. ElicitIntent - Amazon Lex wants to elicit user intent. For example, a user might utter
 * an intent ("I want to order a pizza"). If Amazon Lex cannot infer the user intent from this
 * utterance, it will return this dialogState. ConfirmIntent - Amazon Lex is expecting a "yes" or
 * "no" response. For example, Amazon Lex wants user confirmation before fulfilling an intent.
 * Instead of a simple "yes" or "no," a
 */
export const DialogState1AmazonLexModelBuildingV2OperationsApi = {
  ElicitIntent: "ElicitIntent",
  ConfirmIntent: "ConfirmIntent",
  ElicitSlot: "ElicitSlot",
  Fulfilled: "Fulfilled",
  ReadyForFulfillment: "ReadyForFulfillment",
  Failed: "Failed",
} as const;
export type DialogState1AmazonLexModelBuildingV2OperationsApi =
  | (typeof DialogState1AmazonLexModelBuildingV2OperationsApi)[keyof typeof DialogState1AmazonLexModelBuildingV2OperationsApi]
  | (string & {});

export const dialogState1AmazonLexModelBuildingV2OperationsApiSchema: EnumSchema<DialogState1AmazonLexModelBuildingV2OperationsApi> =
  s.enumOf<DialogState1AmazonLexModelBuildingV2OperationsApi>(
    DialogState1AmazonLexModelBuildingV2OperationsApi,
  );
