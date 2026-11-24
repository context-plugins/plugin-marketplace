import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataFileStorageUsageSchema, type DataFileStorageUsage } from "./data-file-storage-usage.js";
import {
  limitsHudPlatformDataApiSchema,
  type LimitsHudPlatformDataApi,
} from "./unions/limits-hud-platform-data-api.js";

/** Current storage use and effective limits for the caller's team and folder. */
export type DataFileStorageUsageResponse = {
  usage: DataFileStorageUsage;
  limits: LimitsHudPlatformDataApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileStorageUsageResponseSchema: Schema<DataFileStorageUsageResponse> =
  s.object<DataFileStorageUsageResponse>(
    {
      usage: dataFileStorageUsageSchema,
      limits: limitsHudPlatformDataApiSchema,
    },
    { additionalProperties: s.json() },
  );
