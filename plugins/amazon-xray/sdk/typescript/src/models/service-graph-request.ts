import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceGraphRequest = {
  /** The start of the time frame for which to generate a graph. */
  startTime: Date;
  /** The end of the timeframe for which to generate a graph. */
  endTime: Date;
  /** The name of a group based on which you want to generate a graph. */
  groupName?: string;
  /** The Amazon Resource Name (ARN) of a group based on which you want to generate a graph. */
  groupArn?: string;
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceGraphRequestSchema: Schema<ServiceGraphRequest> = s.object<ServiceGraphRequest>(
  {
    startTime: s.dateTime(),
    endTime: s.dateTime(),
    groupName: s.optional(s.string()),
    groupArn: s.optional(s.string()),
    nextToken: s.optional(s.string()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
      groupName: "GroupName",
      groupArn: "GroupARN",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
