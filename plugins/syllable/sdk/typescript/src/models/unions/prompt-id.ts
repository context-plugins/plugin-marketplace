import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the prompt used in the conversation */
export type PromptId = string;

export const promptIdSchema: Schema<PromptId> = s.of<PromptId>(s.union([s.string()]));
