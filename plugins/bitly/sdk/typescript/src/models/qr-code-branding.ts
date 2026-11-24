import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QrCodeBranding = {
  /**
   * A boolean that determines if the QR code should have the bitly brand in its bottom right corner
   */
  bitlyBrand?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeBrandingSchema: Schema<QrCodeBranding> = s.object<QrCodeBranding>(
  {
    bitlyBrand: s.optional(s.boolean()),
    _keysMap: {
      bitlyBrand: "bitly_brand",
    },
  },
  { additionalProperties: s.json() },
);
