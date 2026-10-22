import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conf1Schema, type Conf1 } from "./conf1.js";

/** GoogleCloudStorage collector configuration */
export type CollectorGoogleCloudStorage = {
  /** Collector type @default "google_cloud_storage" */
  type?: "google_cloud_storage";
  /** Collector configuration */
  conf: Conf1;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorGoogleCloudStorageSchema: Schema<CollectorGoogleCloudStorage> =
  s.object<CollectorGoogleCloudStorage>({
    type: s.defaulted(s.literal("google_cloud_storage"), "google_cloud_storage"),
    conf: conf1Schema,
    destructive: s.optional(s.boolean()),
    encoding: s.optional(s.string()),
  });
