import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Storage format used for data persisted in the Dataset. */
export const FormatOptionsCriblLakeDataset = {
  Ddss: "ddss",
  Json: "json",
  Netskope: "netskope",
  Parquet: "parquet",
} as const;
export type FormatOptionsCriblLakeDataset =
  | (typeof FormatOptionsCriblLakeDataset)[keyof typeof FormatOptionsCriblLakeDataset]
  | (string & {});

export const formatOptionsCriblLakeDatasetSchema: EnumSchema<FormatOptionsCriblLakeDataset> =
  s.enumOf<FormatOptionsCriblLakeDataset>(FormatOptionsCriblLakeDataset);
