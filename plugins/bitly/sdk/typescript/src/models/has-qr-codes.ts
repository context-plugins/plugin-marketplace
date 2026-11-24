import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HasQrCodes = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type HasQrCodes = (typeof HasQrCodes)[keyof typeof HasQrCodes] | (string & {});

export const hasQrCodesSchema: EnumSchema<HasQrCodes> = s.enumOf<HasQrCodes>(HasQrCodes);
