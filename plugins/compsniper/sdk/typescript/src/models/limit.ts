import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Rows per page */
export const Limit = {
  _10: 10,
  _20: 20,
  _50: 50,
} as const;
export type Limit = (typeof Limit)[keyof typeof Limit] | (number & {});

export const limitSchema: EnumSchema<Limit> = s.enumOf<Limit>(Limit);
