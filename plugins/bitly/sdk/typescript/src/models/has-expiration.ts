import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HasExpiration = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type HasExpiration = (typeof HasExpiration)[keyof typeof HasExpiration] | (string & {});

export const hasExpirationSchema: EnumSchema<HasExpiration> = s.enumOf<HasExpiration>(HasExpiration);
