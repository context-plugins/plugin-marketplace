import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Shape, shapeSchema } from "./shape.js";

/** Represents one corner, both inner and outer, of a QR code, with color and shape values */
export type QrCodeCorner = {
  /** The inner color of a corner of the QR code in hex code format */
  innerColor?: string;
  /** The outer color of a corner of the QR code in hex code format */
  outerColor?: string;
  /** The shape one of the QR code's corners should take @default Shape.Standard */
  shape?: Shape;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeCornerSchema: Schema<QrCodeCorner> = s.object<QrCodeCorner>(
  {
    innerColor: s.optional(s.string()),
    outerColor: s.optional(s.string()),
    shape: s.defaulted(shapeSchema, Shape.Standard),
    _keysMap: {
      innerColor: "inner_color",
      outerColor: "outer_color",
    },
  },
  { additionalProperties: s.json() },
);
