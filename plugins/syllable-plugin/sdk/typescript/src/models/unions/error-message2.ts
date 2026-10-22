import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Error message from the last processing attempt, if any */
export type ErrorMessage2 = string;

export const errorMessage2Schema: Schema<ErrorMessage2> = s.of<ErrorMessage2>(s.union([s.string()]));
