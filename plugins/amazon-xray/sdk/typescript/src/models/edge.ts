import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aliasSchema, type Alias } from "./alias.js";
import { edgeStatisticsSchema, type EdgeStatistics } from "./edge-statistics.js";
import { histogramEntrySchema, type HistogramEntry } from "./histogram-entry.js";

export type Edge = {
  /** Identifier of the edge. Unique within a service map. */
  referenceId?: number;
  /** The start time of the first segment on the edge. */
  startTime?: Date;
  /** The end time of the last segment on the edge. */
  endTime?: Date;
  summaryStatistics?: EdgeStatistics;
  /**
   * A histogram that maps the spread of client response times on an edge. Only populated for
   * synchronous edges.
   */
  responseTimeHistogram?: HistogramEntry[];
  /** Aliases for the edge. */
  aliases?: Alias[];
  /** Describes an asynchronous connection, with a value of link. */
  edgeType?: string;
  /**
   * A histogram that maps the spread of event age when received by consumers. Age is calculated
   * each time an event is received. Only populated when EdgeType is link.
   */
  receivedEventAgeHistogram?: HistogramEntry[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const edgeSchema: Schema<Edge> = s.object<Edge>(
  {
    referenceId: s.optional(s.int()),
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    summaryStatistics: s.optional(s.lazy(() => edgeStatisticsSchema)),
    responseTimeHistogram: s.optional(s.array(s.lazy(() => histogramEntrySchema))),
    aliases: s.optional(s.array(s.lazy(() => aliasSchema))),
    edgeType: s.optional(s.string()),
    receivedEventAgeHistogram: s.optional(s.array(s.lazy(() => histogramEntrySchema))),
    _keysMap: {
      referenceId: "ReferenceId",
      startTime: "StartTime",
      endTime: "EndTime",
      summaryStatistics: "SummaryStatistics",
      responseTimeHistogram: "ResponseTimeHistogram",
      aliases: "Aliases",
      edgeType: "EdgeType",
      receivedEventAgeHistogram: "ReceivedEventAgeHistogram",
    },
  },
  { additionalProperties: s.json() },
);
