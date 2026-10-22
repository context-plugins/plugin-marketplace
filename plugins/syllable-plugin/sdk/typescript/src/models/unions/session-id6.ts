import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The internal ID of the session */
export type SessionId6 = string;

export const sessionId6Schema: Schema<SessionId6> = s.of<SessionId6>(s.union([s.string()]));
