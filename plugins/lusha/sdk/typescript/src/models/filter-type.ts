import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilterType = {
  Departments: "departments",
  Seniority: "seniority",
  ExistingDataPoints: "existingDataPoints",
  Countries: "countries",
  Locations: "locations",
} as const;
export type FilterType = (typeof FilterType)[keyof typeof FilterType] | (string & {});

export const filterTypeSchema: EnumSchema<FilterType> = s.enumOf<FilterType>(FilterType);
