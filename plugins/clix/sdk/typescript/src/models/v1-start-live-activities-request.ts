import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1LiveActivitySchema,
  type Clixexternalv1LiveActivity,
} from "./clixexternalv1-live-activity.js";

/** Request schema for starting live activities. */
export type V1StartLiveActivitiesRequest = {
  /** List of live activities to start. */
  liveActivities?: Clixexternalv1LiveActivity[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1StartLiveActivitiesRequestSchema: Schema<V1StartLiveActivitiesRequest> =
  s.object<V1StartLiveActivitiesRequest>(
    {
      liveActivities: s.optional(s.array(s.lazy(() => clixexternalv1LiveActivitySchema))),
      _keysMap: {
        liveActivities: "live_activities",
      },
    },
    { additionalProperties: s.json() },
  );
