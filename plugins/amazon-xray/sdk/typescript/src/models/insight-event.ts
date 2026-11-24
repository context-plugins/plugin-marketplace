import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anomalousServiceSchema, type AnomalousService } from "./anomalous-service.js";
import { requestImpactStatisticsSchema, type RequestImpactStatistics } from "./request-impact-statistics.js";

export type InsightEvent = {
  /** A brief description of the event. */
  summary?: string;
  /** The time, in Unix seconds, at which the event was recorded. */
  eventTime?: Date;
  clientRequestImpactStatistics?: RequestImpactStatistics;
  rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
  /** The service during the event that is most impacted by the incident. */
  topAnomalousServices?: AnomalousService[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightEventSchema: Schema<InsightEvent> = s.object<InsightEvent>(
  {
    summary: s.optional(s.string()),
    eventTime: s.optional(s.dateTime()),
    clientRequestImpactStatistics: s.optional(s.lazy(() => requestImpactStatisticsSchema)),
    rootCauseServiceRequestImpactStatistics: s.optional(s.lazy(() => requestImpactStatisticsSchema)),
    topAnomalousServices: s.optional(s.array(s.lazy(() => anomalousServiceSchema))),
    _keysMap: {
      summary: "Summary",
      eventTime: "EventTime",
      clientRequestImpactStatistics: "ClientRequestImpactStatistics",
      rootCauseServiceRequestImpactStatistics: "RootCauseServiceRequestImpactStatistics",
      topAnomalousServices: "TopAnomalousServices",
    },
  },
  { additionalProperties: s.json() },
);
