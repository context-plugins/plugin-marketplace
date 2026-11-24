import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Cursor for these runs in the run stream at taskgroup/runs?last_event_id=<run_cursor>. Empty for
 * the first runs in the group.
 */
export type RunCursor = string;

export const runCursorSchema: Schema<RunCursor> = s.of<RunCursor>(s.union([s.string()]));
