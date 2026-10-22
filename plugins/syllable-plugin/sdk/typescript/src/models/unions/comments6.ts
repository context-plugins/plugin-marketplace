import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments describing the change that resulted in this version */
export type Comments6 = string;

export const comments6Schema: Schema<Comments6> = s.of<Comments6>(s.union([s.string()]));
