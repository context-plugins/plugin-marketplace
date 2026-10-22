import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The Twilio auth token */
export type AuthToken = string;

export const authTokenSchema: Schema<AuthToken> = s.of<AuthToken>(s.union([s.string()]));
