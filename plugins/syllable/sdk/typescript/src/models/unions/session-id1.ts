import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the session in which the event occurred */
export type SessionId1 = string;

export const sessionId1Schema: Schema<SessionId1> = s.of<SessionId1>(s.union([s.string()]));
