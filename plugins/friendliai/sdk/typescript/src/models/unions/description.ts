import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A description of what the function does, used by the model to choose when and how to call the
 * function.
 */
export type Description = string;

export const descriptionSchema: Schema<Description> = s.of<Description>(s.union([s.string()]));
