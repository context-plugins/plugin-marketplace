import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gradientColorSchema, type GradientColor } from "./gradient-color.js";
import { Style, styleSchema } from "./style.js";

export type QrCodeGradient = {
  /** The style of the gradient. Can be either linear or radial. @default Style.NoGradient */
  style?: Style;
  /** The angle by which the gradient will be rotated. Only applies to linear gradients. */
  angle?: number;
  /** The list of hex colors and their offsets to be used in the gradient. */
  colors?: GradientColor[];
  /** Ignore gradient mask on corners */
  excludeCorners?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeGradientSchema: Schema<QrCodeGradient> = s.object<QrCodeGradient>(
  {
    style: s.defaulted(styleSchema, Style.NoGradient),
    angle: s.optional(s.float64()),
    colors: s.optional(s.array(s.lazy(() => gradientColorSchema))),
    excludeCorners: s.optional(s.boolean()),
    _keysMap: {
      excludeCorners: "exclude_corners",
    },
  },
  { additionalProperties: s.json() },
);
