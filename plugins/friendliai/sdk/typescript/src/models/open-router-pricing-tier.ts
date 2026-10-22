import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputCacheRead1Schema, type InputCacheRead1 } from "./unions/input-cache-read1.js";
import { minContextSchema, type MinContext } from "./unions/min-context.js";

/** OpenRouter flat or tiered pricing entry (USD per unit as string). */
export type OpenRouterPricingTier = {
  /** Price per input token in USD. */
  prompt: string;
  /** Price per output token in USD. */
  completion: string;
  /** Price per image in USD (base tier only). @default "0" */
  image?: string;
  /** Price per request in USD (base tier only). @default "0" */
  request?: string;
  /** Price per cached input token read in USD. */
  inputCacheRead?: InputCacheRead1;
  /** Minimum input tokens for this tier to apply. */
  minContext?: MinContext;
};

export const openRouterPricingTierSchema: Schema<OpenRouterPricingTier> = s.object<OpenRouterPricingTier>({
  prompt: s.string(),
  completion: s.string(),
  image: s.defaulted(s.string(), "0"),
  request: s.defaulted(s.string(), "0"),
  inputCacheRead: s.optional(s.lazy(() => inputCacheRead1Schema)),
  minContext: s.optional(s.lazy(() => minContextSchema)),
  _keysMap: {
    inputCacheRead: "input_cache_read",
    minContext: "min_context",
  },
});
