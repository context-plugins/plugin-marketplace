import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Error message associated with the uploaded file */
export type ErrorMessage3 = string;

export const errorMessage3Schema: Schema<ErrorMessage3> = s.of<ErrorMessage3>(s.union([s.string()]));
