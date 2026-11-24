import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Brief description of the entity that can help answer whether entity satisfies the query., A text
 * description of the desired output from the task.
 */
export type Description = string;

export const descriptionSchema: Schema<Description> = s.of<Description>(s.union([s.string()]));
