import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The maximum monetary amount allowed for over-capture, in the smallest currency unit, for example
 * `1299` cents to allow for an over-capture of `$12.99`.
 */
export type OverCaptureAmount1 = number;

export const overCaptureAmount1Schema: Schema<OverCaptureAmount1> = s.of<OverCaptureAmount1>(
  s.union([s.int()]),
);
