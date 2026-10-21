import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The search term to filter monitoring metrics by. */
export type Search3 = string;

export const search3Schema: Schema<Search3> = s.of<Search3>(s.union([s.string()]));
