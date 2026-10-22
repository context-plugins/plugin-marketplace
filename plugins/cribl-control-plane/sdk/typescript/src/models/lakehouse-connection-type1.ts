import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * If <code>new</code>, the Lakehouse was attached before data existed in the Dataset. If
 * <code>existing</code>, the Lakehouse was attached after data existed in the Dataset.
 */
export const LakehouseConnectionType1 = {
  Cache: "cache",
  ZeroPoint: "zeroPoint",
} as const;
export type LakehouseConnectionType1 =
  | (typeof LakehouseConnectionType1)[keyof typeof LakehouseConnectionType1]
  | (string & {});

export const lakehouseConnectionType1Schema: EnumSchema<LakehouseConnectionType1> =
  s.enumOf<LakehouseConnectionType1>(LakehouseConnectionType1);
