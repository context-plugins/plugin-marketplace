import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Internal ID of the session, generated based on interaction details */
export type SessionId5 = string;

export const sessionId5Schema: Schema<SessionId5> = s.of<SessionId5>(s.union([s.string()]));
