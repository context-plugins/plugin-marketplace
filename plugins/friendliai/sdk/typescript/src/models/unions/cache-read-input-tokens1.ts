import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Cached input token count delta when included. */
export type CacheReadInputTokens1 = number;

export const cacheReadInputTokens1Schema: Schema<CacheReadInputTokens1> = s.of<CacheReadInputTokens1>(
  s.union([s.int()]),
);
