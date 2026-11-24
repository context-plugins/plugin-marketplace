import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { completionTokensDetailsSchema, type CompletionTokensDetails } from "../completion-tokens-details.js";

export type CompletionTokensDetails1 = CompletionTokensDetails;

export const completionTokensDetails1Schema: Schema<CompletionTokensDetails1> =
  s.of<CompletionTokensDetails1>(s.union([s.lazy(() => completionTokensDetailsSchema)]));
