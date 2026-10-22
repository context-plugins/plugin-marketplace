import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activity1Schema, type Activity1 } from "./activity1.js";
import { countInfoSchema, type CountInfo } from "./count-info.js";
import { personSchema, type Person } from "./person.js";

export type UserActivityInsight = {
  user: Person;
  /** Activity e.g. search, home page visit or all. */
  activity: Activity1;
  /** Unix timestamp of the last activity (in seconds since epoch UTC). */
  lastActivityTimestamp?: number;
  activityCount?: CountInfo;
  activeDayCount?: CountInfo;
};

export const userActivityInsightSchema: Schema<UserActivityInsight> = s.object<UserActivityInsight>({
  user: personSchema,
  activity: activity1Schema,
  lastActivityTimestamp: s.optional(s.int()),
  activityCount: s.optional(s.lazy(() => countInfoSchema)),
  activeDayCount: s.optional(s.lazy(() => countInfoSchema)),
});
