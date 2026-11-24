import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The sizes of the button. */
export const Sizes = {
  Small: "small",
  Normal: "normal",
  Large: "large",
} as const;
export type Sizes = (typeof Sizes)[keyof typeof Sizes] | (string & {});

export const sizesSchema: EnumSchema<Sizes> = s.enumOf<Sizes>(Sizes);
