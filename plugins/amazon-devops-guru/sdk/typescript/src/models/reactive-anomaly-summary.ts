import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  anomalyReportedTimeRangeSchema,
  type AnomalyReportedTimeRange,
} from "./anomaly-reported-time-range.js";
import { anomalyResourceSchema, type AnomalyResource } from "./anomaly-resource.js";
import { anomalySourceDetailsSchema, type AnomalySourceDetails } from "./anomaly-source-details.js";
import { anomalyTimeRangeSchema, type AnomalyTimeRange } from "./anomaly-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import { severitySchema, type Severity } from "./severity.js";
import { status3Schema, type Status3 } from "./status3.js";
import { typeSchema, type Type } from "./type.js";

export type ReactiveAnomalySummary = {
  /** The ID of the reactive anomaly. */
  id?: string;
  /**
   * The severity of the anomaly. The severity of anomalies that generate an insight determine that
   * insight's severity. For more information, see Understanding insight severities in the Amazon
   * DevOps Guru User Guide.
   */
  severity?: Severity;
  /** The status of the reactive anomaly. */
  status?: Status3;
  anomalyTimeRange?: AnomalyTimeRange;
  anomalyReportedTimeRange?: AnomalyReportedTimeRange;
  sourceDetails?: AnomalySourceDetails;
  /**
   * The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   */
  associatedInsightId?: string;
  resourceCollection?: ResourceCollection;
  /**
   * The type of the reactive anomaly. It can be one of the following types. CAUSAL - the anomaly
   * can cause a new insight. CONTEXTUAL - the anomaly contains additional information about an
   * insight or its causal anomaly.
   */
  type?: Type;
  /** The name of the reactive anomaly. */
  name?: string;
  /** A description of the reactive anomaly. */
  description?: string;
  /**
   * The ID of the causal anomaly that is associated with this reactive anomaly. The ID of a
   * `CAUSAL` anomaly is always `NULL`.
   */
  causalAnomalyId?: string;
  /** The Amazon Web Services resources in which anomalous behavior was detected by DevOps Guru. */
  anomalyResources?: AnomalyResource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reactiveAnomalySummarySchema: Schema<ReactiveAnomalySummary> = s.object<ReactiveAnomalySummary>(
  {
    id: s.optional(s.string()),
    severity: s.optional(s.lazy(() => severitySchema)),
    status: s.optional(s.lazy(() => status3Schema)),
    anomalyTimeRange: s.optional(s.lazy(() => anomalyTimeRangeSchema)),
    anomalyReportedTimeRange: s.optional(s.lazy(() => anomalyReportedTimeRangeSchema)),
    sourceDetails: s.optional(s.lazy(() => anomalySourceDetailsSchema)),
    associatedInsightId: s.optional(s.string()),
    resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
    type: s.optional(s.lazy(() => typeSchema)),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    causalAnomalyId: s.optional(s.string()),
    anomalyResources: s.optional(s.array(s.lazy(() => anomalyResourceSchema))),
    _keysMap: {
      id: "Id",
      severity: "Severity",
      status: "Status",
      anomalyTimeRange: "AnomalyTimeRange",
      anomalyReportedTimeRange: "AnomalyReportedTimeRange",
      sourceDetails: "SourceDetails",
      associatedInsightId: "AssociatedInsightId",
      resourceCollection: "ResourceCollection",
      type: "Type",
      name: "Name",
      description: "Description",
      causalAnomalyId: "CausalAnomalyId",
      anomalyResources: "AnomalyResources",
    },
  },
  { additionalProperties: s.json() },
);
