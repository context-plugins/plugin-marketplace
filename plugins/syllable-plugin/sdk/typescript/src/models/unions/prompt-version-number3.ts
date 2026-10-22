import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Prompt version number used by the agent with which the session occurred (new system) */
export type PromptVersionNumber3 = number;

export const promptVersionNumber3Schema: Schema<PromptVersionNumber3> = s.of<PromptVersionNumber3>(
  s.union([s.int()]),
);
