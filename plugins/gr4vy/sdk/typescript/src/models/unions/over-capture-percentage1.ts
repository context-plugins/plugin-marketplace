import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The maximum percentage allowed for over-capture, for example `25` to allow for an over-capture of
 * `25%` of the original transaction amount.
 */
export type OverCapturePercentage1 = number;

export const overCapturePercentage1Schema: Schema<OverCapturePercentage1> = s.of<OverCapturePercentage1>(
  s.union([s.int()]),
);
