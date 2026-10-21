import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Desired output image format. Optional; defaults to `png` when omitted. Mapped to the closest
 * format the chosen model supports — `webp` falls back to `png` on models that don't support it
 * (e.g. FLUX.2 Pro), and the request is ignored entirely by models that don't expose a format
 * option (e.g. Recraft).
 */
export const ImageFormat = {
  Jpeg: "jpeg",
  Png: "png",
  Webp: "webp",
} as const;
export type ImageFormat = (typeof ImageFormat)[keyof typeof ImageFormat] | (string & {});

export const imageFormatSchema: EnumSchema<ImageFormat> = s.enumOf<ImageFormat>(ImageFormat);
