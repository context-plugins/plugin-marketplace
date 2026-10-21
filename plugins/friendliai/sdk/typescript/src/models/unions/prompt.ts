import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The prompt (i.e., input text) to generate completions for. Either `prompt` or `tokens` field is
 * required.
 */
export type Prompt = string | string[];

export const promptSchema: Schema<Prompt> = s.of<Prompt>(s.union([s.string(), s.array(s.string())]));
