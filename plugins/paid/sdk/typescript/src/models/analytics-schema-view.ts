import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsSchemaColumnSchema, type AnalyticsSchemaColumn } from "./analytics-schema-column.js";

export type AnalyticsSchemaView = {
  name: string;
  comment: string;
  columns: AnalyticsSchemaColumn[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSchemaViewSchema: Schema<AnalyticsSchemaView> = s.object<AnalyticsSchemaView>(
  {
    name: s.string(),
    comment: s.string(),
    columns: s.array(s.lazy(() => analyticsSchemaColumnSchema)),
  },
  { additionalProperties: s.json() },
);
