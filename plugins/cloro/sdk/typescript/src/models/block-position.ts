import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Where the ad appeared on the SERP. `top`/`bottom` are text-ad blocks, `middle` covers
 * direct/in-content ads, `rhs` is the right-hand-side sponsored-products carousel.
 */
export const BlockPosition = {
  Top: "top",
  Bottom: "bottom",
  Middle: "middle",
  Rhs: "rhs",
} as const;
export type BlockPosition = (typeof BlockPosition)[keyof typeof BlockPosition] | (string & {});

export const blockPositionSchema: EnumSchema<BlockPosition> = s.enumOf<BlockPosition>(BlockPosition);
