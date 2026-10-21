import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filters the results to only the items for which the `user` has an `id` that matches this value.
 */
export type UserId = string;

export const userIdSchema: Schema<UserId> = s.of<UserId>(s.union([s.string()]));
