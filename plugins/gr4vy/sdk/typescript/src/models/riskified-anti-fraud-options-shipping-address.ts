import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address18Schema, type Address18 } from "./unions/address18.js";
import { address21Schema, type Address21 } from "./unions/address21.js";
import { citySchema, type City } from "./unions/city.js";
import { company1Schema, type Company1 } from "./unions/company1.js";
import { countryCode1Schema, type CountryCode1 } from "./unions/country-code1.js";
import { firstName6Schema, type FirstName6 } from "./unions/first-name6.js";
import { lastName6Schema, type LastName6 } from "./unions/last-name6.js";
import { phone1Schema, type Phone1 } from "./unions/phone1.js";
import { provinceCodeSchema, type ProvinceCode } from "./unions/province-code.js";
import { provinceSchema, type Province } from "./unions/province.js";
import { zip1Schema, type Zip1 } from "./unions/zip1.js";

/**
 * An additional shipping address to pass to the Riskified API.
 *
 * Field names follow Riskified's Address model rather than the Gr4vy address format, since these
 * options are passed through to their API. The `country` sent to Riskified is derived from
 * `country_code`.
 */
export type RiskifiedAntiFraudOptionsShippingAddress = {
  /**
   * Unique identifier for this address, referenced by `line_items[].shipping_address_id` and
   * `shipping_lines[].shipping_address_id`.
   */
  id: string;
  /** First name of the recipient at this address. */
  firstName?: FirstName6;
  /** Last name of the recipient at this address. */
  lastName?: LastName6;
  /**
   * The phone number of the recipient at this address, which should be formatted according to the
   * E164 number standard.
   */
  phone?: Phone1;
  /** The city for the address. */
  city?: City;
  /**
   * The country for the address in ISO 3166 format. The country name sent to Riskified is derived
   * from this value.
   */
  countryCode?: CountryCode1;
  /** The postal code or zip code for the address. */
  zip?: Zip1;
  /** The state, county, or province for the address. */
  province?: Province;
  /**
   * The code of the state, county, or province for the address. Riskified expects the subdivision
   * on its own, without the country prefix used by ISO 3166-2.
   */
  provinceCode?: ProvinceCode;
  /** The first line of the address. */
  address1?: Address18;
  /** The second line of the address. */
  address2?: Address21;
  /** The optional name of the company or organisation to add to the address. */
  company?: Company1;
};

export const riskifiedAntiFraudOptionsShippingAddressSchema: Schema<RiskifiedAntiFraudOptionsShippingAddress> =
  s.object<RiskifiedAntiFraudOptionsShippingAddress>({
    id: s.string(),
    firstName: s.optional(s.lazy(() => firstName6Schema)),
    lastName: s.optional(s.lazy(() => lastName6Schema)),
    phone: s.optional(s.lazy(() => phone1Schema)),
    city: s.optional(s.lazy(() => citySchema)),
    countryCode: s.optional(s.lazy(() => countryCode1Schema)),
    zip: s.optional(s.lazy(() => zip1Schema)),
    province: s.optional(s.lazy(() => provinceSchema)),
    provinceCode: s.optional(s.lazy(() => provinceCodeSchema)),
    address1: s.optional(s.lazy(() => address18Schema)),
    address2: s.optional(s.lazy(() => address21Schema)),
    company: s.optional(s.lazy(() => company1Schema)),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      countryCode: "country_code",
      provinceCode: "province_code",
    },
  });
