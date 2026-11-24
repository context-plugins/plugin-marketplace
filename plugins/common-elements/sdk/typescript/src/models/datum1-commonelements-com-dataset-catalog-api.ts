import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum1CommonelementsComDatasetCatalogApi = {
  /** Resource this row describes. */
  resourceKey?: string;
  /** Records held for this association in this resource. */
  recordCount?: number;
  /** How many of the resource's sources could be counted. */
  sourcesMeasured?: number;
  /** Whether your key can read the rows behind the count. */
  hasAccess?: boolean;
  /** Whether a zero here means 'nothing happened' or 'this jurisdiction is not matched yet'. */
  coverageNote?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1CommonelementsComDatasetCatalogApiSchema: Schema<Datum1CommonelementsComDatasetCatalogApi> =
  s.object<Datum1CommonelementsComDatasetCatalogApi>(
    {
      resourceKey: s.optional(s.string()),
      recordCount: s.optional(s.float64()),
      sourcesMeasured: s.optional(s.float64()),
      hasAccess: s.optional(s.boolean()),
      coverageNote: s.optional(s.string()),
      _keysMap: {
        resourceKey: "resource_key",
        recordCount: "record_count",
        sourcesMeasured: "sources_measured",
        hasAccess: "has_access",
        coverageNote: "coverage_note",
      },
    },
    { additionalProperties: s.json() },
  );
