import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsSchemaColumn = {
  name: string;
  /** ClickHouse column type */
  type: string;
  comment: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSchemaColumnSchema: Schema<AnalyticsSchemaColumn> = s.object<AnalyticsSchemaColumn>(
  {
    name: s.string(),
    type: s.string(),
    comment: s.string(),
  },
  { additionalProperties: s.json() },
);
