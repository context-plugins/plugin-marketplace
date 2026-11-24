import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceInsightHealthSchema, type ServiceInsightHealth } from "./service-insight-health.js";
import { serviceNameSchema, type ServiceName } from "./service-name.js";

export type ServiceHealth = {
  /** The name of the Amazon Web Services service. */
  serviceName?: ServiceName;
  insight?: ServiceInsightHealth;
  /**
   * Number of resources that DevOps Guru is monitoring in an analyzed Amazon Web Services service.
   */
  analyzedResourceCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceHealthSchema: Schema<ServiceHealth> = s.object<ServiceHealth>(
  {
    serviceName: s.optional(s.lazy(() => serviceNameSchema)),
    insight: s.optional(s.lazy(() => serviceInsightHealthSchema)),
    analyzedResourceCount: s.optional(s.int()),
    _keysMap: {
      serviceName: "ServiceName",
      insight: "Insight",
      analyzedResourceCount: "AnalyzedResourceCount",
    },
  },
  { additionalProperties: s.json() },
);
