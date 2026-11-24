import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FilterType1 = {
  Names: "names",
  Sizes: "sizes",
  Revenues: "revenues",
  Locations: "locations",
  Sics: "sics",
  Naics: "naics",
  IndustriesLabels: "industriesLabels",
  IntentTopics: "intentTopics",
  Technologies: "technologies",
} as const;
export type FilterType1 = (typeof FilterType1)[keyof typeof FilterType1] | (string & {});

export const filterType1Schema: EnumSchema<FilterType1> = s.enumOf<FilterType1>(FilterType1);
