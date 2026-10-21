import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The local path of the tool definition JSON file. */
export type File = string | string[];

export const fileSchema: Schema<File> = s.of<File>(s.union([s.string(), s.array(s.string())]));
