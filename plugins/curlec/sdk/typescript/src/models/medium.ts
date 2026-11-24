import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Medium = {
  Sms: "sms",
  Email: "email",
} as const;
export type Medium = (typeof Medium)[keyof typeof Medium] | (string & {});

export const mediumSchema: EnumSchema<Medium> = s.enumOf<Medium>(Medium);
