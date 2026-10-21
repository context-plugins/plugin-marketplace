import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The ID of the project. If omitted, query all endpoints under the team. */
export type ProjectId1 = string;

export const projectId1Schema: Schema<ProjectId1> = s.of<ProjectId1>(s.union([s.string()]));
