import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";
import { statusSchema, type Status } from "./status.js";

export type ActivityTypeInfo = {
  activityType: ActivityType;
  /** The current status of the activity type. */
  status: Status;
  /** The description of the activity type provided in RegisterActivityType. */
  description?: string;
  /** The date and time this activity type was created through RegisterActivityType. */
  creationDate: Date;
  /** If DEPRECATED, the date and time DeprecateActivityType was called. */
  deprecationDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityTypeInfoSchema: Schema<ActivityTypeInfo> = s.object<ActivityTypeInfo>(
  {
    activityType: activityTypeSchema,
    status: statusSchema,
    description: s.optional(s.string()),
    creationDate: s.dateTime(),
    deprecationDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
