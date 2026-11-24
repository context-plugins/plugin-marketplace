import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Always TXT: the DKIM key, the SPF entry and the DMARC policy, the three records verification
 * checks. No MX or CNAME is issued (receiving and tracking are off).
 */
export const Type = {
  Txt: "TXT",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
