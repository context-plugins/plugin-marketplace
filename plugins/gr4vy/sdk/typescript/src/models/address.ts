import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { citySchema, type City } from "./unions/city.js";
import { countrySchema, type Country } from "./unions/country.js";
import { houseNumberOrNameSchema, type HouseNumberOrName } from "./unions/house-number-or-name.js";
import { line1Schema, type Line1 } from "./unions/line1.js";
import { line2Schema, type Line2 } from "./unions/line2.js";
import { organizationSchema, type Organization } from "./unions/organization.js";
import { postalCodeSchema, type PostalCode } from "./unions/postal-code.js";
import { stateCodeSchema, type StateCode } from "./unions/state-code.js";
import { stateSchema, type State } from "./unions/state.js";

export type Address = {
  /** The city for the address. */
  city?: City;
  /** The country for the address in ISO 3166 format. */
  country?: Country;
  /** The postal code or zip code for the address. */
  postalCode?: PostalCode;
  /** The state, county, or province for the address. */
  state?: State;
  /** The code of state, county, or province for the address in ISO 3166-2 format. */
  stateCode?: StateCode;
  /**
   * The house number or name for the address. Not all payment services use this field but some do.
   */
  houseNumberOrName?: HouseNumberOrName;
  /** The first line of the address. */
  line1?: Line1;
  /** The second line of the address. */
  line2?: Line2;
  /** The optional name of the company or organisation to add to the address. */
  organization?: Organization;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  city: s.optional(s.lazy(() => citySchema)),
  country: s.optional(s.lazy(() => countrySchema)),
  postalCode: s.optional(s.lazy(() => postalCodeSchema)),
  state: s.optional(s.lazy(() => stateSchema)),
  stateCode: s.optional(s.lazy(() => stateCodeSchema)),
  houseNumberOrName: s.optional(s.lazy(() => houseNumberOrNameSchema)),
  line1: s.optional(s.lazy(() => line1Schema)),
  line2: s.optional(s.lazy(() => line2Schema)),
  organization: s.optional(s.lazy(() => organizationSchema)),
  _keysMap: {
    postalCode: "postal_code",
    stateCode: "state_code",
    houseNumberOrName: "house_number_or_name",
  },
});
