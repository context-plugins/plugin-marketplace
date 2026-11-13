import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filter activities to only those belonging to the specified project. Returns activities for the
 * project itself and all its tasks and comments.
 */
export type ParentProjectId = number | string;

export const parentProjectIdSchema: Schema<ParentProjectId> = s.of<ParentProjectId>(
  s.union([s.int(), s.string()]),
);
