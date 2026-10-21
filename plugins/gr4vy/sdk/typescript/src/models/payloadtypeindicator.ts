import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Payloadtypeindicator = {
  Id: "ID",
  Payment: "PAYMENT",
} as const;
export type Payloadtypeindicator =
  | (typeof Payloadtypeindicator)[keyof typeof Payloadtypeindicator]
  | (string & {});

export const payloadtypeindicatorSchema: EnumSchema<Payloadtypeindicator> =
  s.enumOf<Payloadtypeindicator>(Payloadtypeindicator);
