import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Optional provider-native request parameters for the selected model, written with the provider's
 * own field names and values and forwarded unchanged (e.g. {"reasoning": {"effort": "high"}} for
 * OpenAI, {"thinking": {"type": "adaptive"}} for Anthropic, {"thinkingConfig": {"thinkingLevel":
 * "high"}} for Google). Supported paths and values are per-model; an unsupported path, value, or a
 * model that accepts no parameters at all is rejected with 422. Omitting this field applies the
 * model's default parameters (gpt-6-luna defaults to {"reasoning": {"effort": "high"}}); passing {}
 * opts out of that default and leaves the provider's own defaults in place.
 */
export type Modelparams1 = Record<string, unknown>;

export const modelparams1Schema: Schema<Modelparams1> = s.of<Modelparams1>(
  s.union([s.record(s.string(), s.unknown())]),
);
