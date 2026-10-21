import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Storage class to select for uploaded objects */
export const StorageClass9 = {
  Standard: "STANDARD",
  Nearline: "NEARLINE",
  Coldline: "COLDLINE",
  Archive: "ARCHIVE",
} as const;
export type StorageClass9 = (typeof StorageClass9)[keyof typeof StorageClass9] | (string & {});

export const storageClass9Schema: EnumSchema<StorageClass9> = s.enumOf<StorageClass9>(StorageClass9);
