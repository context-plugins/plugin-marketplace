import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { internationalAddressSchema, type InternationalAddress } from "./international-address.js";

export type Controller1 = {
  firstName: string;
  lastName: string;
  title: string;
  dateOfBirth: string;
  address: InternationalAddress;
  ssn: string;
};

export const controller1Schema: Schema<Controller1> = s.object<Controller1>({
  firstName: s.string(),
  lastName: s.string(),
  title: s.string(),
  dateOfBirth: s.string(),
  address: internationalAddressSchema,
  ssn: s.string(),
});
