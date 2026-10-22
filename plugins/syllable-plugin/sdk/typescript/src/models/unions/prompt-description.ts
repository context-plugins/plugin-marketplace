import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Description of the prompt at this version */
export type PromptDescription = string;

export const promptDescriptionSchema: Schema<PromptDescription> = s.of<PromptDescription>(
  s.union([s.string()]),
);
