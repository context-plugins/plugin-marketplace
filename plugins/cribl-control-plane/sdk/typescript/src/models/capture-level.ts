import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Stage at which events are captured. <br><code>0</code> == Before pre-processing Pipeline
 * <br><code>1</code> == Before the Routes <br><code>2</code> == Before post-processing Pipeline
 * <br><code>3</code> == Before the Destination.
 */
export const CaptureLevel = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type CaptureLevel = (typeof CaptureLevel)[keyof typeof CaptureLevel] | (number & {});

export const captureLevelSchema: EnumSchema<CaptureLevel> = s.enumOf<CaptureLevel>(CaptureLevel);
