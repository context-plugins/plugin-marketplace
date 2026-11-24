import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Wraps the image data for a QR code. */
export type PublicQrCodeImageResponse = {
  /** The stringified data for the QR code's image */
  qrCodeImage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicQrCodeImageResponseSchema: Schema<PublicQrCodeImageResponse> =
  s.object<PublicQrCodeImageResponse>(
    {
      qrCodeImage: s.optional(s.string()),
      _keysMap: {
        qrCodeImage: "qr_code_image",
      },
    },
    { additionalProperties: s.json() },
  );
