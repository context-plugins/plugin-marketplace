import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Priority = number;

export const prioritySchema: Schema<Priority> = s.of<Priority>(s.union([s.int()]));
