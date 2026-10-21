import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Where to capture */
export const WhereToCapture = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type WhereToCapture = (typeof WhereToCapture)[keyof typeof WhereToCapture] | (number & {});

export const whereToCaptureSchema: EnumSchema<WhereToCapture> = s.enumOf<WhereToCapture>(WhereToCapture);
