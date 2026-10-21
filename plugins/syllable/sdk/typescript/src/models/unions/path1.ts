import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** JSONPath-style location (e.g. $.context.task.steps[2]) */
export type Path1 = string;

export const path1Schema: Schema<Path1> = s.of<Path1>(s.union([s.string()]));
