import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Filters the reports by searching their name for (partial) matches. */
export type Name111 = string;

export const name111Schema: Schema<Name111> = s.of<Name111>(s.union([s.string()]));
