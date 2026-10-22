import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Labels for campaign */
export type Labels3 = string[];

export const labels3Schema: Schema<Labels3> = s.of<Labels3>(s.union([s.array(s.string())]));
