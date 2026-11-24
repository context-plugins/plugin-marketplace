import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sampler of distributed tracing. OFF is the default value. */
export const Sampler = {
  SamplerUnspecified: "SAMPLER_UNSPECIFIED",
  Off: "OFF",
  Probability: "PROBABILITY",
} as const;
export type Sampler = (typeof Sampler)[keyof typeof Sampler] | (string & {});

export const samplerSchema: EnumSchema<Sampler> = s.enumOf<Sampler>(Sampler);
