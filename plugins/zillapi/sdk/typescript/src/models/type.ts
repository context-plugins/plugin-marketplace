import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  Search: "search",
  BatchDetail: "batch_detail",
  ChainedSearchDetail: "chained_search_detail",
  BuildingUnits: "building_units",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
