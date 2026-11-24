import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { textAlignment3Schema, type TextAlignment3 } from "./text-alignment3.js";
import { textAlignment4Schema, type TextAlignment4 } from "./text-alignment4.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type Block1 = {
  /** Discriminator value: image @default "image" */
  type?: "image";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The URL of the image. */
  imageUrl: string;
  /** The URL that the image should link to. */
  url?: string;
  /** The title of the image. */
  title?: string;
  /** Alternative text for the image. */
  altText?: string;
  /** A caption for the image. */
  caption?: string;
  /** The text alignment of the image. */
  imageAlignment?: TextAlignment3;
  /** The text alignment of the caption. */
  captionAlignment?: TextAlignment4;
  /** The width of the image. Should be between 1 and 100. */
  width?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const block1Schema: Schema<Block1> = s.object<Block1>(
  {
    type: s.defaulted(s.literal("image"), "image"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    imageUrl: s.string(),
    url: s.optional(s.string()),
    title: s.optional(s.string()),
    altText: s.optional(s.string()),
    caption: s.optional(s.string()),
    imageAlignment: s.optional(s.lazy(() => textAlignment3Schema)),
    captionAlignment: s.optional(s.lazy(() => textAlignment4Schema)),
    width: s.optional(s.int()),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
      altText: "alt_text",
    },
  },
  { additionalProperties: s.json() },
);
