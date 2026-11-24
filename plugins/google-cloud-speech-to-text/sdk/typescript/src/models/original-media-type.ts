import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The original media the speech was recorded on. */
export const OriginalMediaType = {
  OriginalMediaTypeUnspecified: "ORIGINAL_MEDIA_TYPE_UNSPECIFIED",
  Audio: "AUDIO",
  Video: "VIDEO",
} as const;
export type OriginalMediaType = (typeof OriginalMediaType)[keyof typeof OriginalMediaType] | (string & {});

export const originalMediaTypeSchema: EnumSchema<OriginalMediaType> =
  s.enumOf<OriginalMediaType>(OriginalMediaType);
