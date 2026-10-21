import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CollectorType = {
  AzureBlob: "azure_blob",
  CriblLake: "cribl_lake",
  Database: "database",
  Filesystem: "filesystem",
  GoogleCloudStorage: "google_cloud_storage",
  HealthCheck: "health_check",
  Rest: "rest",
  S3: "s3",
  Script: "script",
  Splunk: "splunk",
} as const;
export type CollectorType = (typeof CollectorType)[keyof typeof CollectorType] | (string & {});

export const collectorTypeSchema: EnumSchema<CollectorType> = s.enumOf<CollectorType>(CollectorType);
