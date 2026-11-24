import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response containing a generated static QR code image. */
export type PublicStaticQrCodeResponse = {
  /** The image data, base64-encoded. Format is SVG or PNG depending on the requested format. */
  image?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicStaticQrCodeResponseSchema: Schema<PublicStaticQrCodeResponse> =
  s.object<PublicStaticQrCodeResponse>(
    {
      image: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
