import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When the instance was assigned */
export type AssignedAt = string;

export const assignedAtSchema: Schema<AssignedAt> = s.of<AssignedAt>(s.union([s.string()]));
