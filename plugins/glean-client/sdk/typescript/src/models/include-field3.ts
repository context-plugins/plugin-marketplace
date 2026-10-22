import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludeField3 = {
  Facets: "FACETS",
  PeopleDetails: "PEOPLE_DETAILS",
} as const;
export type IncludeField3 = (typeof IncludeField3)[keyof typeof IncludeField3] | (string & {});

export const includeField3Schema: EnumSchema<IncludeField3> = s.enumOf<IncludeField3>(IncludeField3);
