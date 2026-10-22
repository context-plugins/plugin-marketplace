import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the prompt used in the conversation */
export type PromptName = string;

export const promptNameSchema: Schema<PromptName> = s.of<PromptName>(s.union([s.string()]));
