import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Limit = {
  _6: 6,
  _20: 20,
} as const;
export type Limit = (typeof Limit)[keyof typeof Limit] | (number & {});

export const limitSchema: EnumSchema<Limit> = s.enumOf<Limit>(Limit);
