import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1 = {
  Email: "email",
  Phone: "phone",
  Ssn: "ssn",
  CreditCard: "credit_card",
  IpAddress: "ip_address",
  Iban: "iban",
  UsBankRouting: "us_bank_routing",
  Person: "person",
  Organization: "organization",
  Location: "location",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
