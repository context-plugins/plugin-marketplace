import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of content of the QR code. */
export const Type1 = {
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
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
