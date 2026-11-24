import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSource1Schema, type DataSource1 } from "./data-source1.js";
import { eventClass1Schema, type EventClass1 } from "./event-class1.js";
import { eventTimeRangeSchema, type EventTimeRange } from "./event-time-range.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";

export type ListEventsFilters = {
  /** An ID of an insight that is related to the events you want to filter for. */
  insightId?: string;
  eventTimeRange?: EventTimeRange;
  /**
   * The class of the events you want to filter for, such as an infrastructure change, a deployment,
   * or a schema change.
   */
  eventClass?: EventClass1;
  /** The Amazon Web Services source that emitted the events you want to filter for. */
  eventSource?: string;
  /** The source, AWS_CLOUD_TRAIL or AWS_CODE_DEPLOY, of the events you want returned. */
  dataSource?: DataSource1;
  resourceCollection?: ResourceCollection;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEventsFiltersSchema: Schema<ListEventsFilters> = s.object<ListEventsFilters>(
  {
    insightId: s.optional(s.string()),
    eventTimeRange: s.optional(s.lazy(() => eventTimeRangeSchema)),
    eventClass: s.optional(s.lazy(() => eventClass1Schema)),
    eventSource: s.optional(s.string()),
    dataSource: s.optional(s.lazy(() => dataSource1Schema)),
    resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
    _keysMap: {
      insightId: "InsightId",
      eventTimeRange: "EventTimeRange",
      eventClass: "EventClass",
      eventSource: "EventSource",
      dataSource: "DataSource",
      resourceCollection: "ResourceCollection",
    },
  },
  { additionalProperties: s.json() },
);
