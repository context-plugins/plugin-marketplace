import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { declarativeImageSizeSchema, type DeclarativeImageSize } from "../declarative-image-size.js";
import { dimensionsImageSizeSchema, type DimensionsImageSize } from "../dimensions-image-size.js";

/**
 * Desired output size, given in **one** of two mutually exclusive forms:
 *
 *   * `DimensionsImageSize`: `width` and `height` in pixels, for precise control.
 *   * `DeclarativeImageSize`: `aspect_ratio` (and an optional `resolution` tier), resolved
 *     server-side to the closest size the chosen model supports. This is the portable form: most
 *     providers natively accept an aspect ratio plus a resolution tier rather than raw pixels.
 *
 * Omit `image_size` entirely to use the model's default size.
 */
export type ImageSize = DimensionsImageSize | DeclarativeImageSize;

export const imageSizeSchema: Schema<ImageSize> = s.of<ImageSize>(
  s.union([s.lazy(() => dimensionsImageSizeSchema), s.lazy(() => declarativeImageSizeSchema)]),
);
