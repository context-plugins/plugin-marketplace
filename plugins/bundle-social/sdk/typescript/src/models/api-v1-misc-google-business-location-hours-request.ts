import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { field1Schema, type Field1 } from "./field1.js";
import { moreHourInternalSchema, moreHourSchema, type MoreHour } from "./more-hour.js";
import { regularHoursInternalSchema, regularHoursSchema, type RegularHours } from "./regular-hours.js";
import { specialHoursInternalSchema, specialHoursSchema, type SpecialHours } from "./special-hours.js";

export type ApiV1MiscGoogleBusinessLocationHoursRequest = {
  teamId: string;
  validateOnly?: boolean;
  fields: Field1[];
  regularHours?: RegularHours | null;
  specialHours?: SpecialHours | null;
  moreHours?: MoreHour[] | null;
};

const apiV1MiscGoogleBusinessLocationHoursRequestProperties: s.Shape<ApiV1MiscGoogleBusinessLocationHoursRequest> =
  {
    teamId: s.string(),
    validateOnly: s.optional(s.boolean()),
    fields: s.array(s.lazy(() => field1Schema)),
    regularHours: s.optionalNullable(s.lazy(() => regularHoursInternalSchema)),
    specialHours: s.optionalNullable(s.lazy(() => specialHoursInternalSchema)),
    moreHours: s.optionalNullable(s.array(s.lazy(() => moreHourInternalSchema))),
  };

export const apiV1MiscGoogleBusinessLocationHoursRequestInternalSchema: Schema<ApiV1MiscGoogleBusinessLocationHoursRequest> =
  s.object<ApiV1MiscGoogleBusinessLocationHoursRequest>(
    apiV1MiscGoogleBusinessLocationHoursRequestProperties,
  );

export const apiV1MiscGoogleBusinessLocationHoursRequestSchema: Schema<ApiV1MiscGoogleBusinessLocationHoursRequest> =
  s.lazySchema(() =>
    s.object<ApiV1MiscGoogleBusinessLocationHoursRequest>({
      ...apiV1MiscGoogleBusinessLocationHoursRequestProperties,
      fields: s.array(s.lazy(() => field1Schema)).check(s.minLength(1), s.maxLength(3)),
      regularHours: s.optionalNullable(s.lazy(() => regularHoursSchema)),
      specialHours: s.optionalNullable(s.lazy(() => specialHoursSchema)),
      moreHours: s.optionalNullable(s.array(s.lazy(() => moreHourSchema))),
    }),
  );
