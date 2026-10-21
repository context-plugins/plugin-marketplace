import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { internationalAddressSchema, type InternationalAddress } from "./international-address.js";
import { passportSchema, type Passport } from "./passport.js";

export type Controller2 = {
  firstName: string;
  lastName: string;
  title: string;
  dateOfBirth: string;
  address: InternationalAddress;
  passport: Passport;
};

export const controller2Schema: Schema<Controller2> = s.object<Controller2>({
  firstName: s.string(),
  lastName: s.string(),
  title: s.string(),
  dateOfBirth: s.string(),
  address: internationalAddressSchema,
  passport: passportSchema,
});
