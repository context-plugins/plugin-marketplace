import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. The integration config for the Data Catalog service. */
export type DataCatalogConfig2 = {
  /**
   * Optional. Defines whether the metastore metadata should be synced to Data Catalog. The default
   * value is to disable syncing metastore metadata to Data Catalog.
   */
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataCatalogConfig2Schema: Schema<DataCatalogConfig2> = s.object<DataCatalogConfig2>(
  {
    enabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
