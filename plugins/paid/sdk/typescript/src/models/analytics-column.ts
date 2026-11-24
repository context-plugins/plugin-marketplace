import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsColumn = {
  name: string;
  /** ClickHouse column type */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsColumnSchema: Schema<AnalyticsColumn> = s.object<AnalyticsColumn>(
  {
    name: s.string(),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
