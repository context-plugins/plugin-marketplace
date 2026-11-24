import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anomalyResourceLabelSchema, type AnomalyResourceLabel } from "./anomaly-resource-label.js";

/** Resource-specific contribution to an anomaly. */
export type AnomalyResource = {
  cost?: number;
  resourceId?: string;
  skuDescription?: string;
  /** For anomalies related to AWS S3 */
  operation?: string;
  /**
   * Labels (also known as cost-allocation tags) present on this resource during the anomaly; each
   * entry reports the label's key, its value, and the resource's cost tagged with that key/value
   * pair. Cloud providers use different names for the same concept; GCP uses "labels", AWS uses
   * "cost-allocation tags", and Azure uses "tags". We refer to all of these as labels.
   */
  labels?: AnomalyResourceLabel[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalyResourceSchema: Schema<AnomalyResource> = s.object<AnomalyResource>(
  {
    cost: s.optional(s.float64()),
    resourceId: s.optional(s.string()),
    skuDescription: s.optional(s.string()),
    operation: s.optional(s.string()),
    labels: s.optional(s.array(s.lazy(() => anomalyResourceLabelSchema))),
  },
  { additionalProperties: s.json() },
);
