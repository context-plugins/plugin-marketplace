import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  anomalyReportedTimeRangeSchema,
  type AnomalyReportedTimeRange,
} from "./anomaly-reported-time-range.js";
import { anomalyResourceSchema, type AnomalyResource } from "./anomaly-resource.js";
import { anomalySourceDetailsSchema, type AnomalySourceDetails } from "./anomaly-source-details.js";
import { anomalySourceMetadataSchema, type AnomalySourceMetadata } from "./anomaly-source-metadata.js";
import { anomalyTimeRangeSchema, type AnomalyTimeRange } from "./anomaly-time-range.js";
import { predictionTimeRangeSchema, type PredictionTimeRange } from "./prediction-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import { severitySchema, type Severity } from "./severity.js";
import { status1Schema, type Status1 } from "./status1.js";

export type ProactiveAnomalySummary = {
  /** The ID of the anomaly. */
  id?: string;
  /**
   * The severity of the anomaly. The severity of anomalies that generate an insight determine that
   * insight's severity. For more information, see Understanding insight severities in the Amazon
   * DevOps Guru User Guide.
   */
  severity?: Severity;
  /** The status of the anomaly. */
  status?: Status1;
  /** The time of the anomaly's most recent update. */
  updateTime?: Date;
  anomalyTimeRange?: AnomalyTimeRange;
  anomalyReportedTimeRange?: AnomalyReportedTimeRange;
  predictionTimeRange?: PredictionTimeRange;
  sourceDetails?: AnomalySourceDetails;
  /**
   * The ID of the insight that contains this anomaly. An insight is composed of related anomalies.
   */
  associatedInsightId?: string;
  resourceCollection?: ResourceCollection;
  /**
   * A threshold that was exceeded by behavior in analyzed resources. Exceeding this threshold is
   * related to the anomalous behavior that generated this anomaly.
   */
  limit?: number;
  sourceMetadata?: AnomalySourceMetadata;
  /** Information about a resource in which DevOps Guru detected anomalous behavior. */
  anomalyResources?: AnomalyResource[];
  /** A description of the proactive anomaly. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const proactiveAnomalySummarySchema: Schema<ProactiveAnomalySummary> =
  s.object<ProactiveAnomalySummary>(
    {
      id: s.optional(s.string()),
      severity: s.optional(s.lazy(() => severitySchema)),
      status: s.optional(s.lazy(() => status1Schema)),
      updateTime: s.optional(s.dateTime()),
      anomalyTimeRange: s.optional(s.lazy(() => anomalyTimeRangeSchema)),
      anomalyReportedTimeRange: s.optional(s.lazy(() => anomalyReportedTimeRangeSchema)),
      predictionTimeRange: s.optional(s.lazy(() => predictionTimeRangeSchema)),
      sourceDetails: s.optional(s.lazy(() => anomalySourceDetailsSchema)),
      associatedInsightId: s.optional(s.string()),
      resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
      limit: s.optional(s.float64()),
      sourceMetadata: s.optional(s.lazy(() => anomalySourceMetadataSchema)),
      anomalyResources: s.optional(s.array(s.lazy(() => anomalyResourceSchema))),
      description: s.optional(s.string()),
      _keysMap: {
        id: "Id",
        severity: "Severity",
        status: "Status",
        updateTime: "UpdateTime",
        anomalyTimeRange: "AnomalyTimeRange",
        anomalyReportedTimeRange: "AnomalyReportedTimeRange",
        predictionTimeRange: "PredictionTimeRange",
        sourceDetails: "SourceDetails",
        associatedInsightId: "AssociatedInsightId",
        resourceCollection: "ResourceCollection",
        limit: "Limit",
        sourceMetadata: "SourceMetadata",
        anomalyResources: "AnomalyResources",
        description: "Description",
      },
    },
    { additionalProperties: s.json() },
  );
