import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  insightImpactGraphServiceSchema,
  type InsightImpactGraphService,
} from "./insight-impact-graph-service.js";

export type GetInsightImpactGraphResult = {
  /** The insight's unique identifier. */
  insightId?: string;
  /** The provided start time. */
  startTime?: Date;
  /** The provided end time. */
  endTime?: Date;
  /** The time, in Unix seconds, at which the service graph started. */
  serviceGraphStartTime?: Date;
  /** The time, in Unix seconds, at which the service graph ended. */
  serviceGraphEndTime?: Date;
  /** The Amazon Web Services instrumented services related to the insight. */
  services?: InsightImpactGraphService[];
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getInsightImpactGraphResultSchema: Schema<GetInsightImpactGraphResult> =
  s.object<GetInsightImpactGraphResult>(
    {
      insightId: s.optional(s.string()),
      startTime: s.optional(s.dateTime()),
      endTime: s.optional(s.dateTime()),
      serviceGraphStartTime: s.optional(s.dateTime()),
      serviceGraphEndTime: s.optional(s.dateTime()),
      services: s.optional(s.array(s.lazy(() => insightImpactGraphServiceSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        insightId: "InsightId",
        startTime: "StartTime",
        endTime: "EndTime",
        serviceGraphStartTime: "ServiceGraphStartTime",
        serviceGraphEndTime: "ServiceGraphEndTime",
        services: "Services",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
