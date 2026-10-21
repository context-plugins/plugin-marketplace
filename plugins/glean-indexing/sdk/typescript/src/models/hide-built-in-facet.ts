import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HideBuiltInFacet = {
  Type: "TYPE",
  Tag: "TAG",
  Author: "AUTHOR",
  Owner: "OWNER",
} as const;
export type HideBuiltInFacet = (typeof HideBuiltInFacet)[keyof typeof HideBuiltInFacet] | (string & {});

export const hideBuiltInFacetSchema: EnumSchema<HideBuiltInFacet> =
  s.enumOf<HideBuiltInFacet>(HideBuiltInFacet);
