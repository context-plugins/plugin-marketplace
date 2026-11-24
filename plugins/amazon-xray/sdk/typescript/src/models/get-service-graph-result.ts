import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceSchema, type Service } from "./service.js";

export type GetServiceGraphResult = {
  /** The start of the time frame for which the graph was generated. */
  startTime?: Date;
  /** The end of the time frame for which the graph was generated. */
  endTime?: Date;
  /** The services that have processed a traced request during the specified time frame. */
  services?: Service[];
  /**
   * A flag indicating whether the group's filter expression has been consistent, or if the returned
   * service graph may show traces from an older version of the group's filter expression.
   */
  containsOldGroupVersions?: boolean;
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getServiceGraphResultSchema: Schema<GetServiceGraphResult> = s.object<GetServiceGraphResult>(
  {
    startTime: s.optional(s.dateTime()),
    endTime: s.optional(s.dateTime()),
    services: s.optional(s.array(s.lazy(() => serviceSchema))),
    containsOldGroupVersions: s.optional(s.boolean()),
    nextToken: s.optional(s.string()),
    _keysMap: {
      startTime: "StartTime",
      endTime: "EndTime",
      services: "Services",
      containsOldGroupVersions: "ContainsOldGroupVersions",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
