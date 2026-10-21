import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activityEventSchema, type ActivityEvent } from "./activity-event.js";

export type Activity = {
  events: ActivityEvent[];
};

export const activitySchema: Schema<Activity> = s.object<Activity>({
  events: s.array(s.lazy(() => activityEventSchema)),
});
