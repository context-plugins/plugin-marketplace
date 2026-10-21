import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Storage class used for objects written to the Dataset. */
export const StorageClassOptionsCriblLakeDataset = {
  Archive: "Archive",
  Cold: "Cold",
  Cool: "Cool",
  DeepArchive: "DEEP_ARCHIVE",
  Glacier: "GLACIER",
  GlacierIr: "GLACIER_IR",
  Hot: "Hot",
  Inferred: "Inferred",
  IntelligentTiering: "INTELLIGENT_TIERING",
  OnezoneIa: "ONEZONE_IA",
  Standard: "STANDARD",
  StandardIa: "STANDARD_IA",
} as const;
export type StorageClassOptionsCriblLakeDataset =
  | (typeof StorageClassOptionsCriblLakeDataset)[keyof typeof StorageClassOptionsCriblLakeDataset]
  | (string & {});

export const storageClassOptionsCriblLakeDatasetSchema: EnumSchema<StorageClassOptionsCriblLakeDataset> =
  s.enumOf<StorageClassOptionsCriblLakeDataset>(StorageClassOptionsCriblLakeDataset);
