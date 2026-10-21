import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A description of what the response format is for, used by the model to determine how to respond
 * in the format.
 */
export type Description4 = string;

export const description4Schema: Schema<Description4> = s.of<Description4>(s.union([s.string()]));
