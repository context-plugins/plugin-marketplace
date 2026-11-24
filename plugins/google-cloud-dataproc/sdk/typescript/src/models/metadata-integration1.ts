import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataCatalogConfig2Schema, type DataCatalogConfig2 } from "./data-catalog-config2.js";

/**
 * Optional. The setting that defines how metastore metadata should be integrated with external
 * services and systems.
 */
export type MetadataIntegration1 = {
  /** Optional. The integration config for the Data Catalog service. */
  dataCatalogConfig?: DataCatalogConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metadataIntegration1Schema: Schema<MetadataIntegration1> = s.object<MetadataIntegration1>(
  {
    dataCatalogConfig: s.optional(s.lazy(() => dataCatalogConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
