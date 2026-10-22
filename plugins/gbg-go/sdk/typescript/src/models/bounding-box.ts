import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BoundingBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const boundingBoxSchema: Schema<BoundingBox> = s.object<BoundingBox>({
  x: s.float64(),
  y: s.float64(),
  width: s.float64(),
  height: s.float64(),
});
