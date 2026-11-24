import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Format = {
  _0: 0,
  _1: 1,
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (number & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
