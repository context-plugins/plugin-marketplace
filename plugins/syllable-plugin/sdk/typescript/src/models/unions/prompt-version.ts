import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Version of the prompt used in the conversation */
export type PromptVersion = string;

export const promptVersionSchema: Schema<PromptVersion> = s.of<PromptVersion>(s.union([s.string()]));
