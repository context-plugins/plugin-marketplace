import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DatasetFormatFilter = {
  Ddss: "ddss",
} as const;
export type DatasetFormatFilter =
  | (typeof DatasetFormatFilter)[keyof typeof DatasetFormatFilter]
  | (string & {});

export const datasetFormatFilterSchema: EnumSchema<DatasetFormatFilter> =
  s.enumOf<DatasetFormatFilter>(DatasetFormatFilter);
