import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./name.js";

export type CacheReportFilter = {
  /**
   * The parameter name for a filter that determines which files are included or excluded from a
   * cache report. Valid Names: UploadFailureReason | UploadState
   */
  name: Name;
  /**
   * The parameter value for a filter that determines which files are included or excluded from a
   * cache report. Valid UploadFailureReason Values: InaccessibleStorageClass | InvalidObjectState |
   * ObjectMissing | S3AccessDenied Valid UploadState Values: FailingUpload
   */
  values: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cacheReportFilterSchema: Schema<CacheReportFilter> = s.object<CacheReportFilter>(
  {
    name: nameSchema,
    values: s.array(s.string()),
    _keysMap: {
      name: "Name",
      values: "Values",
    },
  },
  { additionalProperties: s.json() },
);
