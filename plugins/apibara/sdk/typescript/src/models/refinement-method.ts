import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional high/low-trim refinement. engine_mileage is preferred when at least 5 final-sale
 * comparables exist in the target engine+mileage band; engine is the fallback when at least 5
 * engine-matched final sales exist.
 */
export const RefinementMethod = {
  EngineMileage: "engine_mileage",
  Engine: "engine",
} as const;
export type RefinementMethod = (typeof RefinementMethod)[keyof typeof RefinementMethod] | (string & {});

export const refinementMethodSchema: EnumSchema<RefinementMethod> =
  s.enumOf<RefinementMethod>(RefinementMethod);
