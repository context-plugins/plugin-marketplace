import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RecordType = {
  SingleUnitListing: "single_unit_listing",
  ListingAggregate: "listing_aggregate",
} as const;
export type RecordType = (typeof RecordType)[keyof typeof RecordType] | (string & {});

export const recordTypeSchema: EnumSchema<RecordType> = s.enumOf<RecordType>(RecordType);
