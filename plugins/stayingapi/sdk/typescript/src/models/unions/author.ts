import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Author = string;

export const authorSchema: Schema<Author> = s.of<Author>(s.union([s.string()]));
