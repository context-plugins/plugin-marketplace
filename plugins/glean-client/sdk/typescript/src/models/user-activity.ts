import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action1Schema, type Action1 } from "./action1.js";
import { countInfoSchema, type CountInfo } from "./count-info.js";
import { personSchema, type Person } from "./person.js";

export type UserActivity = {
  actor?: Person;
  /** Unix timestamp of the activity (in seconds since epoch UTC). */
  timestamp?: number;
  /** The action for the activity */
  action?: Action1;
  aggregateVisitCount?: CountInfo;
};

export const userActivitySchema: Schema<UserActivity> = s.object<UserActivity>({
  actor: s.optional(s.lazy(() => personSchema)),
  timestamp: s.optional(s.int()),
  action: s.optional(s.lazy(() => action1Schema)),
  aggregateVisitCount: s.optional(s.lazy(() => countInfoSchema)),
});
