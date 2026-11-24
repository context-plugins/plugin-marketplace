import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { qrCodeCornerSchema, type QrCodeCorner } from "./qr-code-corner.js";

/**
 * An object representing all three corners of the QR code. The corners corresponding to each
 * property are: corner_1 = top left, corner_2 = top right, and corner_3 = bottom right
 */
export type QrCodeCorners = {
  /** Represents one corner, both inner and outer, of a QR code, with color and shape values */
  corner1?: QrCodeCorner;
  /** Represents one corner, both inner and outer, of a QR code, with color and shape values */
  corner2?: QrCodeCorner;
  /** Represents one corner, both inner and outer, of a QR code, with color and shape values */
  corner3?: QrCodeCorner;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeCornersSchema: Schema<QrCodeCorners> = s.object<QrCodeCorners>(
  {
    corner1: s.optional(s.lazy(() => qrCodeCornerSchema)),
    corner2: s.optional(s.lazy(() => qrCodeCornerSchema)),
    corner3: s.optional(s.lazy(() => qrCodeCornerSchema)),
    _keysMap: {
      corner1: "corner_1",
      corner2: "corner_2",
      corner3: "corner_3",
    },
  },
  { additionalProperties: s.json() },
);
