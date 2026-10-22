import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LakehouseConnectionType = {
  Cache: "cache",
  ZeroPoint: "zeroPoint",
} as const;
export type LakehouseConnectionType =
  | (typeof LakehouseConnectionType)[keyof typeof LakehouseConnectionType]
  | (string & {});

export const lakehouseConnectionTypeSchema: EnumSchema<LakehouseConnectionType> =
  s.enumOf<LakehouseConnectionType>(LakehouseConnectionType);
