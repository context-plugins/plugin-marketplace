import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of allowed tool names for this step. */
export type Allow = string[];

export const allowSchema: Schema<Allow> = s.of<Allow>(s.union([s.array(s.string())]));
