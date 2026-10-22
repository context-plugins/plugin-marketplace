import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { city1Schema, type City1 } from "./unions/city1.js";
import { country5Schema, type Country5 } from "./unions/country5.js";
import { description1Schema, type Description1 } from "./unions/description1.js";
import { name1Schema, type Name1 } from "./unions/name1.js";
import { phoneNumber3Schema, type PhoneNumber3 } from "./unions/phone-number3.js";
import { postalCode2Schema, type PostalCode2 } from "./unions/postal-code2.js";
import { url1Schema, type Url1 } from "./unions/url1.js";

/** Information to show the user on their payments statement */
export type StatementDescriptor = {
  /** Reflects your doing business as (DBA) name. */
  name?: Name1;
  /** A short description about the purchase. */
  description?: Description1;
  /** The merchant's city to be displayed in a statement descriptor. */
  city?: City1;
  /** The 2-letter ISO country code of the merchant to be displayed in a statement descriptor. */
  country?: Country5;
  /**
   * The value in the phone number field of a customer's statement which should be formatted
   * according to the E164 number standard.
   */
  phoneNumber?: PhoneNumber3;
  /** The merchant's URL to be displayed in a statement descriptor. */
  url?: Url1;
  /** The merchant's postal code or zip code. */
  postalCode?: PostalCode2;
};

export const statementDescriptorSchema: Schema<StatementDescriptor> = s.object<StatementDescriptor>({
  name: s.optional(s.lazy(() => name1Schema)),
  description: s.optional(s.lazy(() => description1Schema)),
  city: s.optional(s.lazy(() => city1Schema)),
  country: s.optional(s.lazy(() => country5Schema)),
  phoneNumber: s.optional(s.lazy(() => phoneNumber3Schema)),
  url: s.optional(s.lazy(() => url1Schema)),
  postalCode: s.optional(s.lazy(() => postalCode2Schema)),
  _keysMap: {
    phoneNumber: "phone_number",
    postalCode: "postal_code",
  },
});
