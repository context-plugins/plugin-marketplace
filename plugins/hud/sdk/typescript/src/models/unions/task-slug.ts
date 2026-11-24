import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskSlug = string;

export const taskSlugSchema: Schema<TaskSlug> = s.of<TaskSlug>(s.union([s.string()]));
