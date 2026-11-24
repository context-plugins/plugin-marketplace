import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The style of the gradient. Can be either linear or radial. */
export const Style = {
  NoGradient: "no_gradient",
  Linear: "linear",
  Radial: "radial",
} as const;
export type Style = (typeof Style)[keyof typeof Style] | (string & {});

export const styleSchema: EnumSchema<Style> = s.enumOf<Style>(Style);
