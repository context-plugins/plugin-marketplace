import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  eventsDetectionJobPropertiesSchema,
  type EventsDetectionJobProperties,
} from "./events-detection-job-properties.js";

export type DescribeEventsDetectionJobResponse = {
  eventsDetectionJobProperties?: EventsDetectionJobProperties;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeEventsDetectionJobResponseSchema: Schema<DescribeEventsDetectionJobResponse> =
  s.object<DescribeEventsDetectionJobResponse>(
    {
      eventsDetectionJobProperties: s.optional(s.lazy(() => eventsDetectionJobPropertiesSchema)),
      _keysMap: {
        eventsDetectionJobProperties: "EventsDetectionJobProperties",
      },
    },
    { additionalProperties: s.json() },
  );
