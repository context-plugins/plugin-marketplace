import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Model family:
 * * `flux`: Photorealistic images (FLUX.2 Klein 9B / FLUX.2 Pro).
 * * `recraft`: Vector and illustration (Recraft V3 / Recraft V4).
 * * `gpt-image`: Campaign and marketing images (GPT Image 1 Mini / GPT Image 2).
 * * `nano-banana`: General purpose generation (Nano Banana 1 / Nano Banana 2).
 * * `ideogram`: Realism, text rendering, and artistic generation (Ideogram V4).
 */
export const Family = {
  Flux: "flux",
  Recraft: "recraft",
  GptImage: "gpt-image",
  NanoBanana: "nano-banana",
  Ideogram: "ideogram",
} as const;
export type Family = (typeof Family)[keyof typeof Family] | (string & {});

export const familySchema: EnumSchema<Family> = s.enumOf<Family>(Family);
