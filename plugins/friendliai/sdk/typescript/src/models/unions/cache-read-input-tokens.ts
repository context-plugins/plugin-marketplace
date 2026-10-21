import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Number of input tokens served from cache, when cache reads are applicable. */
export type CacheReadInputTokens = number;

export const cacheReadInputTokensSchema: Schema<CacheReadInputTokens> = s.of<CacheReadInputTokens>(
  s.union([s.int()]),
);
