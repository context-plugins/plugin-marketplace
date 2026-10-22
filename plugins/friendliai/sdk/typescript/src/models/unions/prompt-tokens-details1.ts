import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { promptTokensDetailsSchema, type PromptTokensDetails } from "../prompt-tokens-details.js";

/** Breakdown of tokens used in the prompt. */
export type PromptTokensDetails1 = PromptTokensDetails;

export const promptTokensDetails1Schema: Schema<PromptTokensDetails1> = s.of<PromptTokensDetails1>(
  s.union([s.lazy(() => promptTokensDetailsSchema)]),
);
