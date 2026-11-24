import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilterBy = {
  PhoneNumbers: "phoneNumbers",
  EmailAddresses: "emailAddresses",
} as const;
export type FilterBy = (typeof FilterBy)[keyof typeof FilterBy] | (string & {});

export const filterBySchema: EnumSchema<FilterBy> = s.enumOf<FilterBy>(FilterBy);
