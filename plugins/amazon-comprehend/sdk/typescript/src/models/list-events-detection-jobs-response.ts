import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  eventsDetectionJobPropertiesSchema,
  type EventsDetectionJobProperties,
} from "./events-detection-job-properties.js";

export type ListEventsDetectionJobsResponse = {
  /** A list containing the properties of each job that is returned. */
  eventsDetectionJobPropertiesList?: EventsDetectionJobProperties[];
  /** Identifies the next page of results to return. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listEventsDetectionJobsResponseSchema: Schema<ListEventsDetectionJobsResponse> =
  s.object<ListEventsDetectionJobsResponse>(
    {
      eventsDetectionJobPropertiesList: s.optional(s.array(s.lazy(() => eventsDetectionJobPropertiesSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        eventsDetectionJobPropertiesList: "EventsDetectionJobPropertiesList",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
