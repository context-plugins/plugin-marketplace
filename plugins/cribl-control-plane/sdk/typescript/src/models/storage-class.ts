import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Storage class to select for uploaded objects */
export const StorageClass = {
  Standard: "STANDARD",
  ReducedRedundancy: "REDUCED_REDUNDANCY",
  StandardIa: "STANDARD_IA",
  OnezoneIa: "ONEZONE_IA",
  IntelligentTiering: "INTELLIGENT_TIERING",
  Glacier: "GLACIER",
  GlacierIr: "GLACIER_IR",
  DeepArchive: "DEEP_ARCHIVE",
} as const;
export type StorageClass = (typeof StorageClass)[keyof typeof StorageClass] | (string & {});

export const storageClassSchema: EnumSchema<StorageClass> = s.enumOf<StorageClass>(StorageClass);
