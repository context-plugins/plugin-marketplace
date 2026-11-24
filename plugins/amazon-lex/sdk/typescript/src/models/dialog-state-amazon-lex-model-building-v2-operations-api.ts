import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Identifies the current state of the user interaction. Amazon Lex returns one of the following
 * values as dialogState. The client can optionally use this information to customize the user
 * interface. ElicitIntent - Amazon Lex wants to elicit the user's intent. Consider the following
 * examples: For example, a user might utter an intent ("I want to order a pizza"). If Amazon Lex
 * cannot infer the user intent from this utterance, it will return this dialog state. ConfirmIntent
 * - Amazon Lex is expecting a "yes" or "no" response. For example, Amazon Lex wants user
 * confirmation before fulfilling an inten
 */
export const DialogStateAmazonLexModelBuildingV2OperationsApi = {
  ElicitIntent: "ElicitIntent",
  ConfirmIntent: "ConfirmIntent",
  ElicitSlot: "ElicitSlot",
  Fulfilled: "Fulfilled",
  ReadyForFulfillment: "ReadyForFulfillment",
  Failed: "Failed",
} as const;
export type DialogStateAmazonLexModelBuildingV2OperationsApi =
  | (typeof DialogStateAmazonLexModelBuildingV2OperationsApi)[keyof typeof DialogStateAmazonLexModelBuildingV2OperationsApi]
  | (string & {});

export const dialogStateAmazonLexModelBuildingV2OperationsApiSchema: EnumSchema<DialogStateAmazonLexModelBuildingV2OperationsApi> =
  s.enumOf<DialogStateAmazonLexModelBuildingV2OperationsApi>(
    DialogStateAmazonLexModelBuildingV2OperationsApi,
  );
