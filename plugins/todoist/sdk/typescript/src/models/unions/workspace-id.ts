import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Filter activities by workspace. Accepts a single workspace ID, a list of workspace IDs, or `null`
 * to filter for personal projects (projects not belonging to any workspace). Use `[null, 123]` to
 * include both personal projects and workspace 123. When not set, returns activities from all
 * workspaces and personal projects.
 */
export type WorkspaceId = number | number[];

export const workspaceIdSchema: Schema<WorkspaceId> = s.of<WorkspaceId>(s.union([s.int(), s.array(s.int())]));
