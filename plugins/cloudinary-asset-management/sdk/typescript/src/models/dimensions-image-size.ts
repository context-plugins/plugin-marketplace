import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Exact output dimensions in pixels. Both `width` and `height` are required together. */
export type DimensionsImageSize = {
  /** Output width in pixels. */
  width: number;
  /** Output height in pixels. */
  height: number;
};

export const dimensionsImageSizeSchema: Schema<DimensionsImageSize> = s.object<DimensionsImageSize>({
  width: s.int(),
  height: s.int(),
});
