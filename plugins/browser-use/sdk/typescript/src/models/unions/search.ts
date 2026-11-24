import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filter by name, description or provider */
export type Search = string;

export const searchSchema: Schema<Search> = s.of<Search>(s.union([s.string()]));
