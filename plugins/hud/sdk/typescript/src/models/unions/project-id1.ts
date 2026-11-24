import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Only jobs contained by this Project; omitted lists every Project, Only registries contained by
 * this Project; omitted lists every Project
 */
export type ProjectId1 = string;

export const projectId1Schema: Schema<ProjectId1> = s.of<ProjectId1>(s.union([s.string()]));
