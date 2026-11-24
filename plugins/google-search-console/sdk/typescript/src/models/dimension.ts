import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Dimension = {
  Query: "QUERY",
  Page: "PAGE",
  Country: "COUNTRY",
  Device: "DEVICE",
  SearchAppearance: "SEARCH_APPEARANCE",
} as const;
export type Dimension = (typeof Dimension)[keyof typeof Dimension] | (string & {});

export const dimensionSchema: EnumSchema<Dimension> = s.enumOf<Dimension>(Dimension);
