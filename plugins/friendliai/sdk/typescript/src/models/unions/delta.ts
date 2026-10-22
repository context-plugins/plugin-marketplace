import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The incremental transcript text. */
export type Delta = string;

export const deltaSchema: Schema<Delta> = s.of<Delta>(s.union([s.string()]));
