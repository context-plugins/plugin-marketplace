import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { catalogTypeSchema, type CatalogType } from "./catalog-type.js";
import { databaseSummarySchema, type DatabaseSummary } from "./database-summary.js";

/** Summary of results for a specific destination catalog. */
export type CatalogSummary = {
  /** Output only. The type of the catalog. */
  catalogType?: CatalogType;
  /** Output only. The catalog resource name (format: projects/*&#47;catalogs/*). */
  catalog?: string;
  /** Output only. Summary of results for each database in the catalog. */
  databaseSummaries?: DatabaseSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const catalogSummarySchema: Schema<CatalogSummary> = s.object<CatalogSummary>(
  {
    catalogType: s.optional(s.lazy(() => catalogTypeSchema)),
    catalog: s.optional(s.string()),
    databaseSummaries: s.optional(s.array(s.lazy(() => databaseSummarySchema))),
  },
  { additionalProperties: s.json() },
);
