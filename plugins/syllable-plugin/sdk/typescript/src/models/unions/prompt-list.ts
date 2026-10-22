import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of prompts */
export type PromptList = string[];

export const promptListSchema: Schema<PromptList> = s.of<PromptList>(s.union([s.array(s.string())]));
