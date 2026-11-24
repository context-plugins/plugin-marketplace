import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The position of the thumbnail. */
export const RssThumbnailPosition = {
  AboveTitle: "Above Title",
  BelowTitle: "Below Title",
  LeftOfContent: "Left of content",
  RightOfContent: "Right of content",
  AlternatingHorizontally: "Alternating Horizontally",
} as const;
export type RssThumbnailPosition =
  | (typeof RssThumbnailPosition)[keyof typeof RssThumbnailPosition]
  | (string & {});

export const rssThumbnailPositionSchema: EnumSchema<RssThumbnailPosition> =
  s.enumOf<RssThumbnailPosition>(RssThumbnailPosition);
