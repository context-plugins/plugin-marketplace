import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Storage class to select for uploaded objects */
export const StorageClass10 = {
  Standard: "STANDARD",
  ReducedRedundancy: "REDUCED_REDUNDANCY",
} as const;
export type StorageClass10 = (typeof StorageClass10)[keyof typeof StorageClass10] | (string & {});

export const storageClass10Schema: EnumSchema<StorageClass10> = s.enumOf<StorageClass10>(StorageClass10);
