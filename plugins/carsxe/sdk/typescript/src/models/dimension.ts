import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Dimension = {
  Years: "years",
  Makes: "makes",
  Models: "models",
  Trims: "trims",
  Variants: "variants",
} as const;
export type Dimension = (typeof Dimension)[keyof typeof Dimension] | (string & {});

export const dimensionSchema: EnumSchema<Dimension> = s.enumOf<Dimension>(Dimension);
