import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filter activities to only those belonging to the specified task. Returns activities for the task
 * itself and all its comments.
 */
export type ParentItemId = number | string;

export const parentItemIdSchema: Schema<ParentItemId> = s.of<ParentItemId>(s.union([s.int(), s.string()]));
