import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatCompleteBodyToolChoiceFunction = {
  /**
   * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and
   * dashes, with a maximum length of 64.
   */
  name: string;
};

export const chatCompleteBodyToolChoiceFunctionSchema: Schema<ChatCompleteBodyToolChoiceFunction> =
  s.object<ChatCompleteBodyToolChoiceFunction>({
    name: s.string(),
  });
