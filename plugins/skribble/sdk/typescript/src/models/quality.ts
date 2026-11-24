import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Quality = {
  Ses: "SES",
  Aes: "AES",
  Qes: "QES",
} as const;
export type Quality = (typeof Quality)[keyof typeof Quality] | (string & {});

export const qualitySchema: EnumSchema<Quality> = s.enumOf<Quality>(Quality);
