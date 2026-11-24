import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state1Schema, type State1 } from "./state1.js";

export type InsightSummariesRequest = {
  /** The list of insight states. */
  states?: State1[];
  /** The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided. */
  groupArn?: string;
  /** The name of the group. Required if the GroupARN isn't provided. */
  groupName?: string;
  /**
   * The beginning of the time frame in which the insights started. The start time can't be more
   * than 30 days old.
   */
  startTime: Date;
  /**
   * The end of the time frame in which the insights ended. The end time can't be more than 30 days
   * old.
   */
  endTime: Date;
  /** The maximum number of results to display. */
  maxResults?: number;
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightSummariesRequestSchema: Schema<InsightSummariesRequest> =
  s.object<InsightSummariesRequest>(
    {
      states: s.optional(s.array(s.lazy(() => state1Schema))),
      groupArn: s.optional(s.string()),
      groupName: s.optional(s.string()),
      startTime: s.dateTime(),
      endTime: s.dateTime(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        states: "States",
        groupArn: "GroupARN",
        groupName: "GroupName",
        startTime: "StartTime",
        endTime: "EndTime",
        maxResults: "MaxResults",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
