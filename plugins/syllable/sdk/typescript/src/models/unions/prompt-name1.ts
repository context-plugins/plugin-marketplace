import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the prompt used by the agent with which the session occurred */
export type PromptName1 = string;

export const promptName1Schema: Schema<PromptName1> = s.of<PromptName1>(s.union([s.string()]));
