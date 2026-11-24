import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { flywheelFilterSchema, type FlywheelFilter } from "./flywheel-filter.js";

export type ListFlywheelsRequest = {
  filter?: FlywheelFilter;
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Maximum number of results to return in a response. The default is 100. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFlywheelsRequestSchema: Schema<ListFlywheelsRequest> = s.object<ListFlywheelsRequest>(
  {
    filter: s.optional(s.lazy(() => flywheelFilterSchema)),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    _keysMap: {
      filter: "Filter",
      nextToken: "NextToken",
      maxResults: "MaxResults",
    },
  },
  { additionalProperties: s.json() },
);
