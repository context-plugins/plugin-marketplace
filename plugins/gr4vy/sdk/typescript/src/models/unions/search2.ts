import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The search term to filter merchant accounts by. */
export type Search2 = string;

export const search2Schema: Schema<Search2> = s.of<Search2>(s.union([s.string()]));
