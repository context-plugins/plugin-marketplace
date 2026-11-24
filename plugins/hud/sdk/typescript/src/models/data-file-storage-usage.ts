import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataFileStorageScopeUsageSchema,
  type DataFileStorageScopeUsage,
} from "./data-file-storage-scope-usage.js";

export type DataFileStorageUsage = {
  team: DataFileStorageScopeUsage;
  shared: DataFileStorageScopeUsage;
  member: DataFileStorageScopeUsage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileStorageUsageSchema: Schema<DataFileStorageUsage> = s.object<DataFileStorageUsage>(
  {
    team: dataFileStorageScopeUsageSchema,
    shared: dataFileStorageScopeUsageSchema,
    member: dataFileStorageScopeUsageSchema,
  },
  { additionalProperties: s.json() },
);
