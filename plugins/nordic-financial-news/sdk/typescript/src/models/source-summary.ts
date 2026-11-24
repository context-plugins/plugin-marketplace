import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sourceTypeNordicFinancialNewsSourcesApiSchema,
  type SourceTypeNordicFinancialNewsSourcesApi,
} from "./source-type-nordic-financial-news-sources-api.js";

export type SourceSummary = {
  /** Unique source identifier */
  id: string;
  /** Source display name */
  name: string;
  /** Primary domain of the source */
  domain: string;
  /** Country code (ISO 3166-1 alpha-2) */
  country?: string | null;
  /** Source type */
  sourceType: SourceTypeNordicFinancialNewsSourcesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSummarySchema: Schema<SourceSummary> = s.object<SourceSummary>(
  {
    id: s.string(),
    name: s.string(),
    domain: s.string(),
    country: s.optionalNullable(s.string()),
    sourceType: sourceTypeNordicFinancialNewsSourcesApiSchema,
    _keysMap: {
      sourceType: "source_type",
    },
  },
  { additionalProperties: s.json() },
);
