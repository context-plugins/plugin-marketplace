import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DominantColor = {
  /** The Red RGB value for a dominant color. */
  red?: number;
  /** The Blue RGB value for a dominant color. */
  blue?: number;
  /** The Green RGB value for a dominant color. */
  green?: number;
  /** The Hex code equivalent of the RGB values for a dominant color. */
  hexCode?: string;
  /** The CSS color name of a dominant color. */
  cssColor?: string;
  /** One of 12 simplified color names applied to a dominant color. */
  simplifiedColor?: string;
  /** The percentage of image pixels that have a given dominant color. */
  pixelPercent?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dominantColorSchema: Schema<DominantColor> = s.object<DominantColor>(
  {
    red: s.optional(s.int()),
    blue: s.optional(s.int()),
    green: s.optional(s.int()),
    hexCode: s.optional(s.string()),
    cssColor: s.optional(s.string()),
    simplifiedColor: s.optional(s.string()),
    pixelPercent: s.optional(s.float64()),
    _keysMap: {
      red: "Red",
      blue: "Blue",
      green: "Green",
      hexCode: "HexCode",
      cssColor: "CSSColor",
      simplifiedColor: "SimplifiedColor",
      pixelPercent: "PixelPercent",
    },
  },
  { additionalProperties: s.json() },
);
