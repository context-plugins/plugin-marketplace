import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { confSchema, type Conf } from "./conf.js";

/** AzureBlob collector configuration */
export type CollectorAzureBlob = {
  /** Collector type @default "azure_blob" */
  type?: "azure_blob";
  /** Collector configuration */
  conf: Conf;
  /** Delete any files collected (where applicable) */
  destructive?: boolean;
  /** Character encoding to use when parsing ingested data. */
  encoding?: string;
};

export const collectorAzureBlobSchema: Schema<CollectorAzureBlob> = s.object<CollectorAzureBlob>({
  type: s.defaulted(s.literal("azure_blob"), "azure_blob"),
  conf: confSchema,
  destructive: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
});
