import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Session ID processed by this execution, if applicable */
export type SessionId3 = number;

export const sessionId3Schema: Schema<SessionId3> = s.of<SessionId3>(s.union([s.int()]));
