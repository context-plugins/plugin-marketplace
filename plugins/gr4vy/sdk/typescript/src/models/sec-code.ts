import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SecCode = {
  WebDebit: "WebDebit",
  TelDebit: "TelDebit",
  PpdDebit: "PpdDebit",
} as const;
export type SecCode = (typeof SecCode)[keyof typeof SecCode] | (string & {});

export const secCodeSchema: EnumSchema<SecCode> = s.enumOf<SecCode>(SecCode);
