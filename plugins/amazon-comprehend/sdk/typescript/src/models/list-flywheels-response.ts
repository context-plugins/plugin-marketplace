import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { flywheelSummarySchema, type FlywheelSummary } from "./flywheel-summary.js";

export type ListFlywheelsResponse = {
  /** A list of flywheel properties retrieved by the service in response to the request. */
  flywheelSummaryList?: FlywheelSummary[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFlywheelsResponseSchema: Schema<ListFlywheelsResponse> = s.object<ListFlywheelsResponse>(
  {
    flywheelSummaryList: s.optional(s.array(s.lazy(() => flywheelSummarySchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      flywheelSummaryList: "FlywheelSummaryList",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
