import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OverCapturePercentage = number;

export const overCapturePercentageSchema: Schema<OverCapturePercentage> = s.of<OverCapturePercentage>(
  s.union([s.int()]),
);
