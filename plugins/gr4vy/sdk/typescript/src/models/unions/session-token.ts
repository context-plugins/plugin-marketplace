import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A session token that can be used to fetch session data for direct client integrations. */
export type SessionToken = string;

export const sessionTokenSchema: Schema<SessionToken> = s.of<SessionToken>(s.union([s.string()]));
