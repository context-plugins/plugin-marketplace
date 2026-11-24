import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The alignment of the call to action. */
export const RssCtaAlignment = {
  Left: "Left",
  Center: "Center",
  Right: "Right",
} as const;
export type RssCtaAlignment = (typeof RssCtaAlignment)[keyof typeof RssCtaAlignment] | (string & {});

export const rssCtaAlignmentSchema: EnumSchema<RssCtaAlignment> = s.enumOf<RssCtaAlignment>(RssCtaAlignment);
