import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional comment for this version */
export type Comments2 = string;

export const comments2Schema: Schema<Comments2> = s.of<Comments2>(s.union([s.string()]));
