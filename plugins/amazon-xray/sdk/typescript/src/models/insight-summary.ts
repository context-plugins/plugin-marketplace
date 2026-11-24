import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { anomalousServiceSchema, type AnomalousService } from "./anomalous-service.js";
import { categorySchema, type Category } from "./category.js";
import { requestImpactStatisticsSchema, type RequestImpactStatistics } from "./request-impact-statistics.js";
import { serviceIdSchema, type ServiceId } from "./service-id.js";
import { stateSchema, type State } from "./state.js";

export type InsightSummary = {
  /** The insights unique identifier. */
  insightId?: string;
  /** The Amazon Resource Name (ARN) of the group that the insight belongs to. */
  groupArn?: string;
  /** The name of the group that the insight belongs to. */
  groupName?: string;
  rootCauseServiceId?: ServiceId;
  /** Categories The categories that label and describe the type of insight. */
  categories?: Category[];
  /** The current state of the insight. */
  state?: State;
  /** The time, in Unix seconds, at which the insight began. */
  startTime?: Date;
  /** The time, in Unix seconds, at which the insight ended. */
  endTime?: Date;
  /** A brief description of the insight. */
  summary?: string;
  clientRequestImpactStatistics?: RequestImpactStatistics;
  rootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
  /** The service within the insight that is most impacted by the incident. */
  topAnomalousServices?: AnomalousService[];
  /** The time, in Unix seconds, that the insight was last updated. */
  lastUpdateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightSummarySchema: Schema<InsightSummary> = s.object<InsightSummary>(
  {
    insightId: s.optional(s.string()),
    groupArn: s.optional(s.string()),
    groupName: s.optional(s.string()),
    rootCauseServiceId: s.optional(s.lazy(() => serviceIdSchema)),
    categories: s.optional(s.array(s.lazy(() => categorySchema))),
    state: s.optional(s.lazy(() => stateSchema)),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    summary: s.optional(s.string()),
    clientRequestImpactStatistics: s.optional(s.lazy(() => requestImpactStatisticsSchema)),
    rootCauseServiceRequestImpactStatistics: s.optional(s.lazy(() => requestImpactStatisticsSchema)),
    topAnomalousServices: s.optional(s.array(s.lazy(() => anomalousServiceSchema))),
    lastUpdateTime: s.optional(s.dateTime()),
    _keysMap: {
      insightId: "InsightId",
      groupArn: "GroupARN",
      groupName: "GroupName",
      rootCauseServiceId: "RootCauseServiceId",
      categories: "Categories",
      state: "State",
      startTime: "StartTime",
      endTime: "EndTime",
      summary: "Summary",
      clientRequestImpactStatistics: "ClientRequestImpactStatistics",
      rootCauseServiceRequestImpactStatistics: "RootCauseServiceRequestImpactStatistics",
      topAnomalousServices: "TopAnomalousServices",
      lastUpdateTime: "LastUpdateTime",
    },
  },
  { additionalProperties: s.json() },
);
