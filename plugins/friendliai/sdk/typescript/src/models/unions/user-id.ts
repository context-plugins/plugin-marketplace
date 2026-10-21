import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When `group_by=user_id`, this field provides the user ID of the grouped usage result. */
export type UserId = string;

export const userIdSchema: Schema<UserId> = s.of<UserId>(s.union([s.string()]));
