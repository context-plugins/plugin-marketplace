import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Whether the voice session was ended by the recipient (outbound) / caller (inbound). False if the
 * user was transferred or there was an error. Unset if the session was not a voice session.
 */
export type UserTerminated = boolean;

export const userTerminatedSchema: Schema<UserTerminated> = s.of<UserTerminated>(s.union([s.boolean()]));
