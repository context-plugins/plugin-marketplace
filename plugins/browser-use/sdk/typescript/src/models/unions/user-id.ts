import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Your internal user identifier for this profile. Use this to associate a profile with a user in
 * your system.
 */
export type UserId = string;

export const userIdSchema: Schema<UserId> = s.of<UserId>(s.union([s.string()]));
