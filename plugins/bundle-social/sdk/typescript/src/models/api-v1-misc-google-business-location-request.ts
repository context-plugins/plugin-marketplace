import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categoriesSchema, type Categories } from "./categories.js";
import { latlngSchema, type Latlng } from "./latlng.js";
import { moreHourInternalSchema, moreHourSchema, type MoreHour } from "./more-hour.js";
import { phoneNumbersSchema, type PhoneNumbers } from "./phone-numbers.js";
import { profileInternalSchema, profileSchema, type Profile } from "./profile.js";
import { regularHoursInternalSchema, regularHoursSchema, type RegularHours } from "./regular-hours.js";
import { specialHoursInternalSchema, specialHoursSchema, type SpecialHours } from "./special-hours.js";
import { storefrontAddressSchema, type StorefrontAddress } from "./storefront-address.js";

export type ApiV1MiscGoogleBusinessLocationRequest = {
  teamId: string;
  validateOnly?: boolean;
  title?: string | null;
  profile?: Profile | null;
  websiteUri?: string | null;
  phoneNumbers?: PhoneNumbers | null;
  categories?: Categories | null;
  storefrontAddress?: StorefrontAddress | null;
  regularHours?: RegularHours | null;
  specialHours?: SpecialHours | null;
  moreHours?: MoreHour[] | null;
  openInfo?: Record<string, unknown> | null;
  serviceArea?: Record<string, unknown> | null;
  latlng?: Latlng | null;
};

const apiV1MiscGoogleBusinessLocationRequestProperties: s.Shape<ApiV1MiscGoogleBusinessLocationRequest> = {
  teamId: s.string(),
  validateOnly: s.optional(s.boolean()),
  title: s.optionalNullable(s.string()),
  profile: s.optionalNullable(s.lazy(() => profileInternalSchema)),
  websiteUri: s.optionalNullable(s.string()),
  phoneNumbers: s.optionalNullable(s.lazy(() => phoneNumbersSchema)),
  categories: s.optionalNullable(s.lazy(() => categoriesSchema)),
  storefrontAddress: s.optionalNullable(s.lazy(() => storefrontAddressSchema)),
  regularHours: s.optionalNullable(s.lazy(() => regularHoursInternalSchema)),
  specialHours: s.optionalNullable(s.lazy(() => specialHoursInternalSchema)),
  moreHours: s.optionalNullable(s.array(s.lazy(() => moreHourInternalSchema))),
  openInfo: s.optionalNullable(s.record(s.string(), s.unknown())),
  serviceArea: s.optionalNullable(s.record(s.string(), s.unknown())),
  latlng: s.optionalNullable(s.lazy(() => latlngSchema)),
};

export const apiV1MiscGoogleBusinessLocationRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessLocationRequest> =
  s.object<ApiV1MiscGoogleBusinessLocationRequest>(apiV1MiscGoogleBusinessLocationRequestProperties);

export const apiV1MiscGoogleBusinessLocationRequestSchema: Schema<ApiV1MiscGoogleBusinessLocationRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationRequest>({
      ...apiV1MiscGoogleBusinessLocationRequestProperties,
      title: s.optionalNullable(s.string().check(s.maxLength(255))),
      profile: s.optionalNullable(s.lazy(() => profileSchema)),
      websiteUri: s.optionalNullable(s.string().check(s.url())),
      regularHours: s.optionalNullable(s.lazy(() => regularHoursSchema)),
      specialHours: s.optionalNullable(s.lazy(() => specialHoursSchema)),
      moreHours: s.optionalNullable(s.array(s.lazy(() => moreHourSchema))),
    }),
  );
