import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The call's start (placement) time; the zero point for all offsets. Falls back to the first
 * transcript turn for legacy sessions with no session_start event.
 */
export type SessionStart = Date;

export const sessionStartSchema: Schema<SessionStart> = s.of<SessionStart>(s.union([s.dateTime()]));
