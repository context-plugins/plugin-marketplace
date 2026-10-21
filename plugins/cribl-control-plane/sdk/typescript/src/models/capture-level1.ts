import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Stage at which events are captured. If not provided, the default is 0. */
export const CaptureLevel1 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type CaptureLevel1 = (typeof CaptureLevel1)[keyof typeof CaptureLevel1] | (number & {});

export const captureLevel1Schema: EnumSchema<CaptureLevel1> = s.enumOf<CaptureLevel1>(CaptureLevel1);
