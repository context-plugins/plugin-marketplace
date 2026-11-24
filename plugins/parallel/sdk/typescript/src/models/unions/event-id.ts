import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Cursor to resume the event stream. Always empty for non Task Group runs. */
export type EventId = string;

export const eventIdSchema: Schema<EventId> = s.of<EventId>(s.union([s.string()]));
