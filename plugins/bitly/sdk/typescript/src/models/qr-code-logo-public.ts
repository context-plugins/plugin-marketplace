import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QrCodeLogoPublic = {
  /** A GUID for an image uploaded to Bitly */
  imageGuid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeLogoPublicSchema: Schema<QrCodeLogoPublic> = s.object<QrCodeLogoPublic>(
  {
    imageGuid: s.optional(s.string()),
    _keysMap: {
      imageGuid: "image_guid",
    },
  },
  { additionalProperties: s.json() },
);
