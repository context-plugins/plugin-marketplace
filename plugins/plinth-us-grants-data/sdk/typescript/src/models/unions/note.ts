import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Note = string;

export const noteSchema: Schema<Note> = s.of<Note>(s.union([s.string()]));
