import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Specifies how metastore metadata should be integrated with the Data Catalog service. */
export type DataCatalogConfig = {
  /**
   * Optional. Defines whether the metastore metadata should be synced to Data Catalog. The default
   * value is to disable syncing metastore metadata to Data Catalog.
   */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataCatalogConfigSchema: Schema<DataCatalogConfig> = s.object<DataCatalogConfig>(
  {
    enabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
