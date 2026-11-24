import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aggregation1Schema, type Aggregation1 } from "./aggregation1.js";
import { type7DoiTReportsApiSchema, type Type7DoiTReportsApi } from "./type7-doi-treports-api.js";
import { unit2Schema, type Unit2 } from "./unit2.js";

/** Schema of a report result column. */
export type SchemaField = {
  /**
   * Stable allocation-group ID used to select the allocation dimension in report configurations.
   * Omitted for other report columns.
   */
  id?: string;
  /** Column name. Matches the corresponding value position in each row. */
  name?: string;
  /**
   * Wire-format type of the column values. Dimension columns use string; metric columns use float
   * (cost, usage, saving, custom, and extended metrics) or integer (count aggregation). Time-series
   * reports include a timestamp column.
   */
  type?: Type7DoiTReportsApi;
  /** Semantic unit of the column values. */
  unit?: Unit2;
  /** Effective ISO 4217 currency code when unit is currency. */
  currency?: string;
  /** Authoritative aggregation applied to this metric column. */
  aggregation?: Aggregation1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaFieldSchema: Schema<SchemaField> = s.object<SchemaField>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => type7DoiTReportsApiSchema)),
    unit: s.optional(s.lazy(() => unit2Schema)),
    currency: s.optional(s.string()),
    aggregation: s.optional(s.lazy(() => aggregation1Schema)),
  },
  { additionalProperties: s.json() },
);
