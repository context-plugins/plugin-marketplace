import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilterTypeLushaSignalsApi = {
  NewsEventTypes: "newsEventTypes",
  HiringByDepartments: "hiringByDepartments",
  HiringByLocations: "hiringByLocations",
  IntentCategories: "intentCategories",
} as const;
export type FilterTypeLushaSignalsApi =
  | (typeof FilterTypeLushaSignalsApi)[keyof typeof FilterTypeLushaSignalsApi]
  | (string & {});

export const filterTypeLushaSignalsApiSchema: EnumSchema<FilterTypeLushaSignalsApi> =
  s.enumOf<FilterTypeLushaSignalsApi>(FilterTypeLushaSignalsApi);
