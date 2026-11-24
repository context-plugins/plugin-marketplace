import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TotalTokens = number;

export const totalTokensSchema: Schema<TotalTokens> = s.of<TotalTokens>(s.union([s.int()]));
