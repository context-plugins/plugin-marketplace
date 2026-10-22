import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The AI summary of the session */
export type Summary = string;

export const summarySchema: Schema<Summary> = s.of<Summary>(s.union([s.string()]));
