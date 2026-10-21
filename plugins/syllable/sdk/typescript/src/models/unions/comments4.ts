import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comment string describing additional details about the session */
export type Comments4 = string;

export const comments4Schema: Schema<Comments4> = s.of<Comments4>(s.union([s.string()]));
