import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anomalySkuSchema, type AnomalySku } from "./anomaly-sku.js";

/** Deterministic facts about the anomaly, not AI-generated. */
export type Facts = {
  /** Service name */
  serviceName: string;
  /** Cloud Provider name */
  platform: string;
  /** Scope: Project or Account */
  scope: string;
  /** Severity level: `information`, `warning`, or `critical`. */
  severityLevel: string;
  /** The difference between the actual cost and the maximum cost in the normal range. */
  costOfAnomaly: number;
  /** Observed (actual) cost of the anomaly. */
  actualCost?: number | null;
  /** Maximum cost within the expected normal range. */
  expectedMaxCost?: number | null;
  /** Array of SKU entries contributing to an anomaly. */
  top3SkUs: AnomalySku[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const factsSchema: Schema<Facts> = s.object<Facts>(
  {
    serviceName: s.string(),
    platform: s.string(),
    scope: s.string(),
    severityLevel: s.string(),
    costOfAnomaly: s.float64(),
    actualCost: s.optionalNullable(s.float64()),
    expectedMaxCost: s.optionalNullable(s.float64()),
    top3SkUs: s.array(s.lazy(() => anomalySkuSchema)),
    _keysMap: {
      top3SkUs: "top3SKUs",
    },
  },
  { additionalProperties: s.json() },
);
