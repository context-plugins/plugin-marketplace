import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aspectRatioSchema, type AspectRatio } from "./aspect-ratio.js";
import { resolutionSchema, type Resolution } from "./resolution.js";

/**
 * Declarative output size — an aspect ratio plus an optional resolution tier, resolved server-side
 * to the nearest size the model supports.
 */
export type DeclarativeImageSize = {
  /**
   * Output aspect ratio, width-to-height. Limited to the core ratios every model supports natively.
   */
  aspectRatio: AspectRatio;
  /**
   * Output resolution tier, measured on the longest edge. Defaults to `1K` when omitted.
   * * `0.5K`: ~512 px
   * * `1K`: ~1024 px
   * * `2K`: ~2048 px
   * * `4K`: ~4096 px
   */
  resolution?: Resolution;
};

export const declarativeImageSizeSchema: Schema<DeclarativeImageSize> = s.object<DeclarativeImageSize>({
  aspectRatio: aspectRatioSchema,
  resolution: s.optional(s.lazy(() => resolutionSchema)),
  _keysMap: {
    aspectRatio: "aspect_ratio",
  },
});
