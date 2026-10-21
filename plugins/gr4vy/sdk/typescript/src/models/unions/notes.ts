import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Notes for the monitoring incident. */
export type Notes = string;

export const notesSchema: Schema<Notes> = s.of<Notes>(s.union([s.string()]));
