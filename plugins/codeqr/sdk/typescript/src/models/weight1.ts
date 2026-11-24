import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Font weight of the frame label text. `bold` renders at SVG `font-weight="700"`, `normal` at
 * `400`.
 */
export const Weight1 = {
  Normal: "normal",
  Bold: "bold",
} as const;
export type Weight1 = (typeof Weight1)[keyof typeof Weight1] | (string & {});

export const weight1Schema: EnumSchema<Weight1> = s.enumOf<Weight1>(Weight1);
