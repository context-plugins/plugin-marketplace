import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OverCaptureAmount = number;

export const overCaptureAmountSchema: Schema<OverCaptureAmount> = s.of<OverCaptureAmount>(s.union([s.int()]));
