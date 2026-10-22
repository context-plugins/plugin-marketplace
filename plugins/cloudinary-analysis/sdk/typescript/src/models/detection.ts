import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Detection = {
  name: string;
  confidence: number;
};

export const detectionSchema: Schema<Detection> = s.object<Detection>({
  name: s.string(),
  confidence: s.float64(),
});
