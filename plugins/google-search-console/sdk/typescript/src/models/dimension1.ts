import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Dimension1 = {
  Date: "DATE",
  Query: "QUERY",
  Page: "PAGE",
  Country: "COUNTRY",
  Device: "DEVICE",
  SearchAppearance: "SEARCH_APPEARANCE",
  Hour: "HOUR",
} as const;
export type Dimension1 = (typeof Dimension1)[keyof typeof Dimension1] | (string & {});

export const dimension1Schema: EnumSchema<Dimension1> = s.enumOf<Dimension1>(Dimension1);
