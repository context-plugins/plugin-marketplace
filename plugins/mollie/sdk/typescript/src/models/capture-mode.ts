import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicate if the funds should be captured immediately or if you want to [place a
 * hold](https://docs.mollie.com/docs/place-a-hold-for-a-payment#/) and capture at a later time.
 *
 * This field needs to be set to `manual` for method `riverty`.
 */
export const CaptureMode = {
  Automatic: "automatic",
  Manual: "manual",
} as const;
export type CaptureMode = (typeof CaptureMode)[keyof typeof CaptureMode] | (string & {});

export const captureModeSchema: EnumSchema<CaptureMode> = s.enumOf<CaptureMode>(CaptureMode);
