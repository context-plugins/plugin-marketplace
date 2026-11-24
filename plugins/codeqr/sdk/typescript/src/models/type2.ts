import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by QR code type */
export const Type2 = {
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
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
