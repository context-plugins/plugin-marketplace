import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagTriggerInput = {
  /** Optional comment describing the update */
  comment?: string;
  /**
   * The instructions to perform when updating. This should be an array with objects that look like
   * <code>{"kind": "trigger_action"}</code>.
   */
  instructions?: Record<string, unknown>[];
};

export const flagTriggerInputSchema: Schema<FlagTriggerInput> = s.object<FlagTriggerInput>({
  comment: s.optional(s.string()),
  instructions: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
