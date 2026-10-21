import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The channel target being split, or null if that target has since been deleted. A running
 * experiment always has one.
 */
export type TargetId = number;

export const targetIdSchema: Schema<TargetId> = s.of<TargetId>(s.union([s.int()]));
