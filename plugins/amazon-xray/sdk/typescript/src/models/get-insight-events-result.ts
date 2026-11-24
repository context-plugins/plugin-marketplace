import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightEventSchema, type InsightEvent } from "./insight-event.js";

export type GetInsightEventsResult = {
  /**
   * A detailed description of the event. This includes the time of the event, client and root cause
   * impact statistics, and the top anomalous service at the time of the event.
   */
  insightEvents?: InsightEvent[];
  /** Use this token to retrieve the next page of insight events. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getInsightEventsResultSchema: Schema<GetInsightEventsResult> = s.object<GetInsightEventsResult>(
  {
    insightEvents: s.optional(s.array(s.lazy(() => insightEventSchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      insightEvents: "InsightEvents",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
