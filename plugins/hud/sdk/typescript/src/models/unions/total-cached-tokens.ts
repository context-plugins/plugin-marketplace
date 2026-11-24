import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TotalCachedTokens = number;

export const totalCachedTokensSchema: Schema<TotalCachedTokens> = s.of<TotalCachedTokens>(s.union([s.int()]));
