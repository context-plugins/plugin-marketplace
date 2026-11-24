import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { edgeSchema, type Edge } from "./edge.js";
import { histogramEntrySchema, type HistogramEntry } from "./histogram-entry.js";
import { serviceStatisticsSchema, type ServiceStatistics } from "./service-statistics.js";

export type Service = {
  /** Identifier for the service. Unique within the service map. */
  referenceId?: number;
  /** The canonical name of the service. */
  name?: string;
  /** A list of names for the service, including the canonical name. */
  names?: string[];
  /** Indicates that the service was the first service to process a request. */
  root?: boolean;
  /** Identifier of the Amazon Web Services account in which the service runs. */
  accountId?: string;
  /**
   * The type of service. Amazon Web Services Resource - The type of an Amazon Web Services
   * resource. For example, AWS::EC2::Instance for an application running on Amazon EC2 or
   * AWS::DynamoDB::Table for an Amazon DynamoDB table that the application used. Amazon Web
   * Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for
   * downstream calls to Amazon DynamoDB that didn't target a specific table. client - Represents
   * the clients that sent requests to a root service. remote - A downstream service of
   * indeterminate type.
   */
  type?: string;
  /** The service's state. */
  state?: string;
  /** The start time of the first segment that the service generated. */
  startTime?: Date;
  /** The end time of the last segment that the service generated. */
  endTime?: Date;
  /** Connections to downstream services. */
  edges?: Edge[];
  summaryStatistics?: ServiceStatistics;
  /** A histogram that maps the spread of service durations. */
  durationHistogram?: HistogramEntry[];
  /** A histogram that maps the spread of service response times. */
  responseTimeHistogram?: HistogramEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceSchema: Schema<Service> = s.object<Service>(
  {
    referenceId: s.optional(s.int()),
    name: s.optional(s.string()),
    names: s.optional(s.array(s.string())),
    root: s.optional(s.boolean()),
    accountId: s.optional(s.string()),
    type: s.optional(s.string()),
    state: s.optional(s.string()),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    edges: s.optional(s.array(s.lazy(() => edgeSchema))),
    summaryStatistics: s.optional(s.lazy(() => serviceStatisticsSchema)),
    durationHistogram: s.optional(s.array(s.lazy(() => histogramEntrySchema))),
    responseTimeHistogram: s.optional(s.array(s.lazy(() => histogramEntrySchema))),
    _keysMap: {
      referenceId: "ReferenceId",
      name: "Name",
      names: "Names",
      root: "Root",
      accountId: "AccountId",
      type: "Type",
      state: "State",
      startTime: "StartTime",
      endTime: "EndTime",
      edges: "Edges",
      summaryStatistics: "SummaryStatistics",
      durationHistogram: "DurationHistogram",
      responseTimeHistogram: "ResponseTimeHistogram",
    },
  },
  { additionalProperties: s.json() },
);
