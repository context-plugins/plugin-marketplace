import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the uploaded file; null only when the file is entirely deleted */
export type Filename = string;

export const filenameSchema: Schema<Filename> = s.of<Filename>(s.union([s.string()]));
