import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Cursor for these runs in the event stream at taskgroup/events?last_event_id=<event_cursor>. Empty
 * for the first runs in the group.
 */
export type EventCursor = string;

export const eventCursorSchema: Schema<EventCursor> = s.of<EventCursor>(s.union([s.string()]));
