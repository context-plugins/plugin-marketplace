import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The data state to be fetched, can be full or all, the latter including full and partial data. */
export const DataState = {
  DataStateUnspecified: "DATA_STATE_UNSPECIFIED",
  Final: "FINAL",
  All: "ALL",
  HourlyAll: "HOURLY_ALL",
} as const;
export type DataState = (typeof DataState)[keyof typeof DataState] | (string & {});

export const dataStateSchema: EnumSchema<DataState> = s.enumOf<DataState>(DataState);
