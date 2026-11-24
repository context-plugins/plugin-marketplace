import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Size = {
  S: "s",
  M: "m",
  L: "l",
  Xl: "xl",
} as const;
export type Size = (typeof Size)[keyof typeof Size] | (string & {});

export const sizeSchema: EnumSchema<Size> = s.enumOf<Size>(Size);
