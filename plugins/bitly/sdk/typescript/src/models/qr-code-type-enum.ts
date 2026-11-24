import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of dynamic/static content the QR serves, e.g. Link In Bio page, micro site, bitlink,
 * email, text, Wifi, etc.
 */
export const QrCodeTypeEnum = {
  Bitlink: "bitlink",
  LongUrl: "long_url",
  LinkInBio: "link_in_bio",
  VCard: "v_card",
  Wifi: "wifi",
  Email: "email",
  Phone: "phone",
  Text: "text",
} as const;
export type QrCodeTypeEnum = (typeof QrCodeTypeEnum)[keyof typeof QrCodeTypeEnum] | (string & {});

export const qrCodeTypeEnumSchema: EnumSchema<QrCodeTypeEnum> = s.enumOf<QrCodeTypeEnum>(QrCodeTypeEnum);
