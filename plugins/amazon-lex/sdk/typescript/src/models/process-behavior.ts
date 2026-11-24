import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If you set the processBehavior element to BUILD, Amazon Lex builds the bot so that it can be run.
 * If you set the element to SAVE Amazon Lex saves the bot, but doesn't build it. If you don't
 * specify this value, the default value is BUILD.
 */
export const ProcessBehavior = {
  Save: "SAVE",
  Build: "BUILD",
} as const;
export type ProcessBehavior = (typeof ProcessBehavior)[keyof typeof ProcessBehavior] | (string & {});

export const processBehaviorSchema: EnumSchema<ProcessBehavior> = s.enumOf<ProcessBehavior>(ProcessBehavior);
