import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GeographicAccessCustomRegion = {
  /** Stable service-generated custom-region ID. */
  id: string;
  /** Authenticated tenant that owns the custom region. */
  customerId: string;
  /** Customer-visible custom-region name. */
  name: string;
  /** Canonical ISO 3166-1 alpha-2 country codes in the region. */
  countryCodes: string[];
  /** User or service-account identifier that created the region. */
  createdBy: string;
  /** Time the region was created. */
  timeCreated: Date;
  /** Time the region was last modified. */
  timeModified: Date;
};

const geographicAccessCustomRegionProperties: s.Shape<GeographicAccessCustomRegion> = {
  id: s.string(),
  customerId: s.string(),
  name: s.string(),
  countryCodes: s.array(s.string()),
  createdBy: s.string(),
  timeCreated: s.dateTime(),
  timeModified: s.dateTime(),
};

export const geographicAccessCustomRegionInternalSchema: Schema<GeographicAccessCustomRegion> =
  s.object<GeographicAccessCustomRegion>(geographicAccessCustomRegionProperties);

export const geographicAccessCustomRegionSchema: Schema<GeographicAccessCustomRegion> = s.lazySchema(() =>
  s.object<GeographicAccessCustomRegion>({
    ...geographicAccessCustomRegionProperties,
    id: s.string().check(s.minLength(1), s.maxLength(200)),
    name: s.string().check(s.minLength(1), s.maxLength(200)),
    countryCodes: s.array(s.string().check(s.pattern("^[A-Z]{2}$"))).check(s.minLength(1), s.uniqueItems()),
  }),
);
