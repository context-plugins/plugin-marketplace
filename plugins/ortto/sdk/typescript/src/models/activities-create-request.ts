import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activitySchema, type Activity } from "./activity.js";

export type ActivitiesCreateRequest = {
  activities: Activity[];
  mergeBy?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const activitiesCreateRequestProperties: s.Shape<ActivitiesCreateRequest> = {
  activities: s.array(s.lazy(() => activitySchema)),
  mergeBy: s.optional(s.array(s.string())),
  _keysMap: {
    mergeBy: "merge_by",
  },
};

export const activitiesCreateRequestInternalSchema: Schema<ActivitiesCreateRequest> =
  s.object<ActivitiesCreateRequest>(activitiesCreateRequestProperties, { additionalProperties: s.json() });

export const activitiesCreateRequestSchema: Schema<ActivitiesCreateRequest> = s.lazySchema(() =>
  s.object<ActivitiesCreateRequest>(
    {
      ...activitiesCreateRequestProperties,
      activities: s.array(s.lazy(() => activitySchema)).check(s.maxLength(100)),
    },
    { additionalProperties: s.json() },
  ),
);
