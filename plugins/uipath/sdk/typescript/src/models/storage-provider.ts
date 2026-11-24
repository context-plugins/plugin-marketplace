import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cloud storage backend provider */
export const StorageProvider = {
  UiPath: "UiPath",
  Azure: "Azure",
  Amazon: "Amazon",
  Minio: "Minio",
} as const;
export type StorageProvider = (typeof StorageProvider)[keyof typeof StorageProvider] | (string & {});

export const storageProviderSchema: EnumSchema<StorageProvider> = s.enumOf<StorageProvider>(StorageProvider);
