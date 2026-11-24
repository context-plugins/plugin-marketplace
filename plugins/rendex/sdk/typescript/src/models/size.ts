import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Size = {
  A4: "A4",
  Letter: "Letter",
  Legal: "Legal",
  Tabloid: "Tabloid",
  A3: "A3",
} as const;
export type Size = (typeof Size)[keyof typeof Size] | (string & {});

export const sizeSchema: EnumSchema<Size> = s.enumOf<Size>(Size);
