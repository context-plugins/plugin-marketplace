import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { collectorAzureBlobSchema, type CollectorAzureBlob } from "../collector-azure-blob.js";
import { collectorCriblLakeSchema, type CollectorCriblLake } from "../collector-cribl-lake.js";
import { collectorDatabaseSchema, type CollectorDatabase } from "../collector-database.js";
import { collectorFilesystemSchema, type CollectorFilesystem } from "../collector-filesystem.js";
import {
  collectorGoogleCloudStorageSchema,
  type CollectorGoogleCloudStorage,
} from "../collector-google-cloud-storage.js";
import { collectorHealthCheckSchema, type CollectorHealthCheck } from "../collector-health-check.js";
import { collectorRestSchema, type CollectorRest } from "../collector-rest.js";
import { collectorS3Schema, type CollectorS3 } from "../collector-s3.js";
import { collectorScriptSchema, type CollectorScript } from "../collector-script.js";
import { collectorSplunkSchema, type CollectorSplunk } from "../collector-splunk.js";

/** Collector configuration */
export type Collector =
  | (CollectorAzureBlob & { type: "azure_blob" })
  | (CollectorCriblLake & { type: "cribl_lake" })
  | (CollectorDatabase & { type: "database" })
  | (CollectorFilesystem & { type: "filesystem" })
  | (CollectorGoogleCloudStorage & { type: "google_cloud_storage" })
  | (CollectorHealthCheck & { type: "health_check" })
  | (CollectorRest & { type: "rest" })
  | (CollectorS3 & { type: "s3" })
  | (CollectorScript & { type: "script" })
  | (CollectorSplunk & { type: "splunk" });

export const collectorSchema: Schema<Collector> = s.discriminatedUnion<Collector>("type", {
  azure_blob: collectorAzureBlobSchema,
  cribl_lake: collectorCriblLakeSchema,
  database: collectorDatabaseSchema,
  filesystem: collectorFilesystemSchema,
  google_cloud_storage: collectorGoogleCloudStorageSchema,
  health_check: collectorHealthCheckSchema,
  rest: collectorRestSchema,
  s3: collectorS3Schema,
  script: collectorScriptSchema,
  splunk: collectorSplunkSchema,
});
