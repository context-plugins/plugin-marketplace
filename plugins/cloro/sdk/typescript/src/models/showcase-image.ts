import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Image rendered as the hero of a product showcase */
export type ShowcaseImage = {
  url: string;
  width?: number;
  height?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const showcaseImageSchema: Schema<ShowcaseImage> = s.object<ShowcaseImage>(
  {
    url: s.string(),
    width: s.optional(s.float64()),
    height: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
