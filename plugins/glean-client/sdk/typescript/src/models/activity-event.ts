import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { activityEventParamsSchema, type ActivityEventParams } from "./activity-event-params.js";

export type ActivityEvent = {
  /**
   * Universally unique identifier of the event. To allow for reliable retransmission, only the
   * earliest received event of a given UUID is considered valid by the server and subsequent are
   * ignored.
   */
  id?: string;
  /** The type of activity this represents. */
  action: Action;
  params?: ActivityEventParams;
  /** The ISO 8601 timestamp when the activity began. */
  timestamp: Date;
  /** The URL of the activity. */
  url: string;
};

export const activityEventSchema: Schema<ActivityEvent> = s.object<ActivityEvent>({
  id: s.optional(s.string()),
  action: actionSchema,
  params: s.optional(s.lazy(() => activityEventParamsSchema)),
  timestamp: s.dateTime(),
  url: s.string(),
});
