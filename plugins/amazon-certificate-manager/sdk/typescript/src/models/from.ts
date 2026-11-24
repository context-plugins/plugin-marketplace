import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The validation method that the certificate was using before the update. */
export const From = {
  Email: "EMAIL",
  Dns: "DNS",
  Http: "HTTP",
} as const;
export type From = (typeof From)[keyof typeof From] | (string & {});

export const fromSchema: EnumSchema<From> = s.enumOf<From>(From);
