import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type WorkingDir = string;

export const workingDirSchema: Schema<WorkingDir> = s.of<WorkingDir>(s.union([s.string()]));
