import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type PreviousAddress = {
  /** Unformatted line based address */
  lines?: string[];
  /** The address as a single line */
  addressString?: string;
  /**
   * The primary delivery point for a premise or building. This could be a house number, a building
   * name, etc.
   */
  premise?: string;
  /** The name of a building or a building complex. In the US, this is the street number. */
  building?: string;
  /** The name of a sub-building, such as a flat or apartment number. */
  subBuilding?: string;
  /**
   * This field holds the most common street or block data element within a country. For instance,
   * USA Street
   */
  thoroughfare?: string;
  /** The name of a dependent street or block, such as a street within a complex. */
  dependentThoroughfare?: string;
  /**
   * This field holds the most common population center data element within a country. For instance,
   * USA City, Canadian Municipality
   */
  locality?: string;
  /**
   * This is a smaller area within a locality, such as a neighborhood or district. Like Manhattan in
   * New York City, or Soho in London.
   */
  dependentLocality?: string;
  /**
   * This is an even smaller area within a dependent locality, often used in very detailed
   * addresses.
   */
  doubleDependentLocality?: string;
  /**
   * This field contains the complete postal code for a particular delivery point, should such
   * detail be able to be determined. For example ZIP code in the US
   */
  postalCode?: string;
  /**
   * This field contains the post box number associated with a particular delivery point, should one
   * exist.
   */
  postBox?: string;
  /** Country the address is in. It must be a valid ISO2 or ISO3 country code */
  country?: string;
  superAdministrativeArea?: string;
  administrativeArea?: string;
  subAdministrativeArea?: string;
  organization?: string;
  location?: Location;
  /**
   * Specified in year, month and day separated by -. For example 2017-1-1 or 2017-01-01 which
   * conforms to ISO 8601
   */
  fromDate: string;
  /**
   * Specified in year, month and day separated by -. For example 2017-1-1 or 2017-01-01 which
   * conforms to ISO 8601
   */
  toDate: string;
};

export const previousAddressSchema: Schema<PreviousAddress> = s.object<PreviousAddress>({
  lines: s.optional(s.array(s.string())),
  addressString: s.optional(s.string()),
  premise: s.optional(s.string()),
  building: s.optional(s.string()),
  subBuilding: s.optional(s.string()),
  thoroughfare: s.optional(s.string()),
  dependentThoroughfare: s.optional(s.string()),
  locality: s.optional(s.string()),
  dependentLocality: s.optional(s.string()),
  doubleDependentLocality: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  postBox: s.optional(s.string()),
  country: s.optional(s.string()),
  superAdministrativeArea: s.optional(s.string()),
  administrativeArea: s.optional(s.string()),
  subAdministrativeArea: s.optional(s.string()),
  organization: s.optional(s.string()),
  location: s.optional(s.lazy(() => locationSchema)),
  fromDate: s.string(),
  toDate: s.string(),
});
