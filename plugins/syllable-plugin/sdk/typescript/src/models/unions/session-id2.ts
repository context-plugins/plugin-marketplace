import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The session ID of the session against which to run the tool */
export type SessionId2 = number | string;

export const sessionId2Schema: Schema<SessionId2> = s.of<SessionId2>(s.union([s.int(), s.string()]));
