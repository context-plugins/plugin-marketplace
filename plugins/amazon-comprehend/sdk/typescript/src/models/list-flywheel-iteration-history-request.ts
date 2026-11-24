import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { flywheelIterationFilterSchema, type FlywheelIterationFilter } from "./flywheel-iteration-filter.js";

export type ListFlywheelIterationHistoryRequest = {
  /** The ARN of the flywheel. */
  flywheelArn: string;
  filter?: FlywheelIterationFilter;
  /** Next token */
  nextToken?: string;
  /** Maximum number of iteration history results to return */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFlywheelIterationHistoryRequestSchema: Schema<ListFlywheelIterationHistoryRequest> =
  s.object<ListFlywheelIterationHistoryRequest>(
    {
      flywheelArn: s.string(),
      filter: s.optional(s.lazy(() => flywheelIterationFilterSchema)),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      _keysMap: {
        flywheelArn: "FlywheelArn",
        filter: "Filter",
        nextToken: "NextToken",
        maxResults: "MaxResults",
      },
    },
    { additionalProperties: s.json() },
  );
