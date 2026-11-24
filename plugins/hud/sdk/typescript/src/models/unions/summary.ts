import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The importer's account of the outcome; set once completed or stopped */
export type Summary = string;

export const summarySchema: Schema<Summary> = s.of<Summary>(s.union([s.string()]));
