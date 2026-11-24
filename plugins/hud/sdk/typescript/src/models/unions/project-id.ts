import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ProjectId = string;

export const projectIdSchema: Schema<ProjectId> = s.of<ProjectId>(s.union([s.string()]));
