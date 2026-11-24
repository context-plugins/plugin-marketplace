import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { latLng1Schema, type LatLng1 } from "./lat-lng1.js";
import { telecommutePreferenceSchema, type TelecommutePreference } from "./telecommute-preference.js";

/** Geographic region of the search. */
export type LocationFilter = {
  /**
   * CLDR region code of the country/region. This field may be used in two ways: 1) If telecommute
   * preference is not set, this field is used address ambiguity of the user-input address. For
   * example, "Liverpool" may refer to "Liverpool, NY, US" or "Liverpool, UK". This region code
   * biases the address resolution toward a specific country or territory. If this field is not set,
   * address resolution is biased toward the United States by default. 2) If telecommute preference
   * is set to TELECOMMUTE_ALLOWED, the telecommute location filter will be limited to the region
   * specified in this field. If this field is not set, the telecommute job locations will not be
   * See
   * https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_information.html
   * for details. Example: "CH" for Switzerland.
   */
  regionCode?: string;
  /**
   * The distance_in_miles is applied when the location being searched for is identified as a city
   * or smaller. This field is ignored if the location being searched for is a state or larger.
   */
  distanceInMiles?: number;
  /**
   * Allows the client to return jobs without a set location, specifically, telecommuting jobs
   * (telecommuting is considered by the service as a special location). Job.posting_region
   * indicates if a job permits telecommuting. If this field is set to
   * TelecommutePreference.TELECOMMUTE_ALLOWED, telecommuting jobs are searched, and address and
   * lat_lng are ignored. If not set or set to TelecommutePreference.TELECOMMUTE_EXCLUDED, the
   * telecommute status of the jobs is ignored. Jobs that have PostingRegion.TELECOMMUTE and have
   * additional Job.addresses may still be matched based on other location filters using address or
   * lat_lng. This filter can be used by itself to search exclusively for telecommuting jobs, or it
   * can be combined with another location filter to search for a combination of job locations, such
   * as "Mountain View" or "telecommuting" jobs. However, when used in combination with other
   * location filters, telecommuting jobs can be treated as less relevant than other jobs in the
   * search response. This field is only used for job search requests.
   */
  telecommutePreference?: TelecommutePreference;
  /**
   * The latitude and longitude of the geographic center to search from. This field is ignored if
   * `address` is provided.
   */
  latLng?: LatLng1;
  /** The address name, such as "Mountain View" or "Bay Area". */
  address?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationFilterSchema: Schema<LocationFilter> = s.object<LocationFilter>(
  {
    regionCode: s.optional(s.string()),
    distanceInMiles: s.optional(s.float64()),
    telecommutePreference: s.optional(s.lazy(() => telecommutePreferenceSchema)),
    latLng: s.optional(s.lazy(() => latLng1Schema)),
    address: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
