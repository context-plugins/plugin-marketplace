import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Point = {
  timestamp: string;
  value: string;
  confidence: number;
};

export const pointSchema: Schema<Point> = s.object<Point>({
  timestamp: s.string(),
  value: s.string(),
  confidence: s.float64(),
});
