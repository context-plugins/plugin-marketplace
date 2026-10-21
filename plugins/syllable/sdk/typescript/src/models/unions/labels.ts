import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The agent labels */
export type Labels = string[];

export const labelsSchema: Schema<Labels> = s.of<Labels>(s.union([s.array(s.string())]));
