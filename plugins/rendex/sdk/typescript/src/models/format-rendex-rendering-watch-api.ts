import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A pdf cannot be visually diffed — pair it with diffMode `text`. */
export const FormatRendexRenderingWatchApi = {
  Png: "png",
  Jpeg: "jpeg",
  Webp: "webp",
  Pdf: "pdf",
} as const;
export type FormatRendexRenderingWatchApi =
  | (typeof FormatRendexRenderingWatchApi)[keyof typeof FormatRendexRenderingWatchApi]
  | (string & {});

export const formatRendexRenderingWatchApiSchema: EnumSchema<FormatRendexRenderingWatchApi> =
  s.enumOf<FormatRendexRenderingWatchApi>(FormatRendexRenderingWatchApi);
