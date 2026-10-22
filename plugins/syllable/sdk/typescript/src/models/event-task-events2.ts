import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { start2Schema, type Start2 } from "./unions/start2.js";

/** Actions to execute when the configured events occur. */
export type EventTaskEvents2 = {
  /** Actions to execute on the first input from the user. */
  start?: Start2;
};

export const eventTaskEvents2Schema: Schema<EventTaskEvents2> = s.object<EventTaskEvents2>({
  start: s.optional(s.lazy(() => start2Schema)),
});
