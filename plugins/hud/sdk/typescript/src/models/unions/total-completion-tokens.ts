import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TotalCompletionTokens = number;

export const totalCompletionTokensSchema: Schema<TotalCompletionTokens> = s.of<TotalCompletionTokens>(
  s.union([s.int()]),
);
