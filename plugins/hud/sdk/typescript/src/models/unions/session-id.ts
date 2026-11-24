import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SessionId = string;

export const sessionIdSchema: Schema<SessionId> = s.of<SessionId>(s.union([s.string()]));
