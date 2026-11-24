import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The action that the bot should execute. */
export const Type = {
  ElicitIntent: "ElicitIntent",
  StartIntent: "StartIntent",
  ElicitSlot: "ElicitSlot",
  EvaluateConditional: "EvaluateConditional",
  InvokeDialogCodeHook: "InvokeDialogCodeHook",
  ConfirmIntent: "ConfirmIntent",
  FulfillIntent: "FulfillIntent",
  CloseIntent: "CloseIntent",
  EndConversation: "EndConversation",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
