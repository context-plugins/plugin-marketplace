import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unique ID for call session */
export type SessionId = number;

export const sessionIdSchema: Schema<SessionId> = s.of<SessionId>(s.union([s.int()]));
