import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional comment stored on the tool for this version */
export type Comments5 = string;

export const comments5Schema: Schema<Comments5> = s.of<Comments5>(s.union([s.string()]));
