import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InsightBreakdownRow = {
  key: string;
  label: string;
  count: number;
  pct: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightBreakdownRowSchema: Schema<InsightBreakdownRow> = s.object<InsightBreakdownRow>(
  {
    key: s.string(),
    label: s.string(),
    count: s.int(),
    pct: s.float64(),
  },
  { additionalProperties: s.json() },
);
