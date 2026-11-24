import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CachedTokens = number;

export const cachedTokensSchema: Schema<CachedTokens> = s.of<CachedTokens>(s.union([s.int()]));
