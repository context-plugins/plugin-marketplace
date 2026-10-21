import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unique ID for the session */
export type SessionId4 = number;

export const sessionId4Schema: Schema<SessionId4> = s.of<SessionId4>(s.union([s.int()]));
