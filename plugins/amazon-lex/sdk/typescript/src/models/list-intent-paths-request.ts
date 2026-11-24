import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { analyticsPathFilterSchema, type AnalyticsPathFilter } from "./analytics-path-filter.js";

export type ListIntentPathsRequest = {
  /** The identifier for the bot for which you want to retrieve intent path metrics. */
  botId: string;
  /**
   * The date and time that marks the beginning of the range of time for which you want to see
   * intent path metrics.
   */
  startDateTime: Date;
  /**
   * The date and time that marks the end of the range of time for which you want to see intent path
   * metrics.
   */
  endDateTime: Date;
  /**
   * The intent path for which you want to retrieve metrics. Use a forward slash to separate intents
   * in the path. For example: /BookCar /BookCar/BookHotel /BookHotel/BookCar
   */
  intentPath: string;
  /** A list of objects, each describes a condition by which you want to filter the results. */
  filters?: AnalyticsPathFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listIntentPathsRequestSchema: Schema<ListIntentPathsRequest> = s.object<ListIntentPathsRequest>(
  {
    botId: s.string(),
    startDateTime: s.dateTime(),
    endDateTime: s.dateTime(),
    intentPath: s.string(),
    filters: s.optional(s.array(s.lazy(() => analyticsPathFilterSchema))),
  },
  { additionalProperties: s.json() },
);
