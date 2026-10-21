import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Hugging Face model ID (e.g. meta-llama/Llama-3.1-8B-Instruct). */
export type HfModelRepo = string;

export const hfModelRepoSchema: Schema<HfModelRepo> = s.of<HfModelRepo>(s.union([s.string()]));
