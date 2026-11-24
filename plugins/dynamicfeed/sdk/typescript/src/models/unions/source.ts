import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** OpenAI, Google AI, Hugging Face, ... */
export type Source = string;

export const sourceSchema: Schema<Source> = s.of<Source>(s.union([s.string()]));
