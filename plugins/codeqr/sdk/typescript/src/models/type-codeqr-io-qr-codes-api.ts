import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the QR code. */
export const TypeCodeqrIoQrCodesApi = {
  Url: "url",
  Text: "text",
  Email: "email",
  Wifi: "wifi",
  Phone: "phone",
  Vcard: "vcard",
  Crypto: "crypto",
  Sms: "sms",
  Facetime: "facetime",
  Geo: "geo",
  Latlog: "latlog",
  Pix: "pix",
  Whatsapp: "whatsapp",
} as const;
export type TypeCodeqrIoQrCodesApi =
  | (typeof TypeCodeqrIoQrCodesApi)[keyof typeof TypeCodeqrIoQrCodesApi]
  | (string & {});

export const typeCodeqrIoQrCodesApiSchema: EnumSchema<TypeCodeqrIoQrCodesApi> =
  s.enumOf<TypeCodeqrIoQrCodesApi>(TypeCodeqrIoQrCodesApi);
