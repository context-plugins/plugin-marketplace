import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataFileStorageScopeUsage = {
  fileCount: number;
  sizeBytes: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileStorageScopeUsageSchema: Schema<DataFileStorageScopeUsage> =
  s.object<DataFileStorageScopeUsage>(
    {
      fileCount: s.int(),
      sizeBytes: s.int(),
      _keysMap: {
        fileCount: "file_count",
        sizeBytes: "size_bytes",
      },
    },
    { additionalProperties: s.json() },
  );
