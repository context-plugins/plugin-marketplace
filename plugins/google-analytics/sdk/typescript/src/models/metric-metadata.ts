import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockedReasonSchema, type BlockedReason } from "./blocked-reason.js";
import { type1Schema, type Type1 } from "./type1.js";

/** Explains a metric. */
export type MetricMetadata = {
  /** The type of this metric. */
  type?: Type1;
  /**
   * The display name of the category that this metrics belongs to. Similar dimensions and metrics
   * are categorized together.
   */
  category?: string;
  /** This metric's name within the Google Analytics user interface. For example, `Event count`. */
  uiName?: string;
  /**
   * The mathematical expression for this derived metric. Can be used in [Metric](#Metric)'s
   * `expression` field for equivalent reports. Most metrics are not expressions, and for
   * non-expressions, this field is empty.
   */
  expression?: string;
  /**
   * Still usable but deprecated names for this metric. If populated, this metric is available by
   * either `apiName` or one of `deprecatedApiNames` for a period of time. After the deprecation
   * period, the metric will be available only by `apiName`.
   */
  deprecatedApiNames?: string[];
  /**
   * If reasons are specified, your access is blocked to this metric for this property. API requests
   * from you to this property for this metric will succeed; however, the report will contain only
   * zeros for this metric. API requests with metric filters on blocked metrics will fail. If
   * reasons are empty, you have access to this metric. To learn more, see [Access and
   * data-restriction management](https://support.google.com/analytics/answer/10851388).
   */
  blockedReasons?: BlockedReason[];
  /** Description of how this metric is used and calculated. */
  description?: string;
  /** True if the metric is a custom metric for this property. */
  customDefinition?: boolean;
  /** A metric name. Useable in [Metric](#Metric)'s `name`. For example, `eventCount`. */
  apiName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metricMetadataSchema: Schema<MetricMetadata> = s.object<MetricMetadata>(
  {
    type: s.optional(s.lazy(() => type1Schema)),
    category: s.optional(s.string()),
    uiName: s.optional(s.string()),
    expression: s.optional(s.string()),
    deprecatedApiNames: s.optional(s.array(s.string())),
    blockedReasons: s.optional(s.array(s.lazy(() => blockedReasonSchema))),
    description: s.optional(s.string()),
    customDefinition: s.optional(s.boolean()),
    apiName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
