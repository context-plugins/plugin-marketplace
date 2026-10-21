import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Specifies where endpoint will be created in your Friendli Dedicated Endpoints. If not provided, a
 * new project will be created within your default team.
 */
export type ProjectId = string;

export const projectIdSchema: Schema<ProjectId> = s.of<ProjectId>(s.union([s.string()]));
