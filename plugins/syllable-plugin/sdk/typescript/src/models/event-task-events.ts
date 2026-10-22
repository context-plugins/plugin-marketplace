import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { start2Schema, type Start2 } from "./unions/start2.js";

export type EventTaskEvents = {
  /** Actions to execute on the first input from the user. */
  start?: Start2;
};

export const eventTaskEventsSchema: Schema<EventTaskEvents> = s.object<EventTaskEvents>({
  start: s.optional(s.lazy(() => start2Schema)),
});
