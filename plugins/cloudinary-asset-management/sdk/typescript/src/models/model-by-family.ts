import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { familySchema, type Family } from "./family.js";
import { tierSchema, type Tier } from "./tier.js";

/** Select a model by family and quality tier; a missing `tier` defaults to `standard`. */
export type ModelByFamily = {
  /**
   * Model family:
   * * `flux`: Photorealistic images (FLUX.2 Klein 9B / FLUX.2 Pro).
   * * `recraft`: Vector and illustration (Recraft V3 / Recraft V4).
   * * `gpt-image`: Campaign and marketing images (GPT Image 1 Mini / GPT Image 2).
   * * `nano-banana`: General purpose generation (Nano Banana 1 / Nano Banana 2).
   * * `ideogram`: Realism, text rendering, and artistic generation (Ideogram V4).
   */
  family: Family;
  /** Quality tier within the family. Defaults to `standard` when omitted. */
  tier?: Tier;
};

export const modelByFamilySchema: Schema<ModelByFamily> = s.object<ModelByFamily>({
  family: familySchema,
  tier: s.optional(s.lazy(() => tierSchema)),
});
