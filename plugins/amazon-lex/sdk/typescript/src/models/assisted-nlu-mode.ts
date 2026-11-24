import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the mode for Assisted NLU operation. Use Primary to make Assisted NLU the primary
 * intent recognition method, Fallback to use it only when standard NLU confidence is low, or
 * DialogManager to use a large language model to manage the conversation, including intent
 * recognition, slot elicitation, and confirmation.
 */
export const AssistedNluMode = {
  Primary: "Primary",
  Fallback: "Fallback",
  DialogManager: "DialogManager",
} as const;
export type AssistedNluMode = (typeof AssistedNluMode)[keyof typeof AssistedNluMode] | (string & {});

export const assistedNluModeSchema: EnumSchema<AssistedNluMode> = s.enumOf<AssistedNluMode>(AssistedNluMode);
