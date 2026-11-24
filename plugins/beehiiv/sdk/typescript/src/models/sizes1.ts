import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The size of the button (e.g., small, normal, large). */
export const Sizes1 = {
  Small: "small",
  Normal: "normal",
  Large: "large",
} as const;
export type Sizes1 = (typeof Sizes1)[keyof typeof Sizes1] | (string & {});

export const sizes1Schema: EnumSchema<Sizes1> = s.enumOf<Sizes1>(Sizes1);
