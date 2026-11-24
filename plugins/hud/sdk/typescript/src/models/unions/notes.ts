import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Notes = string;

export const notesSchema: Schema<Notes> = s.of<Notes>(s.union([s.string()]));
