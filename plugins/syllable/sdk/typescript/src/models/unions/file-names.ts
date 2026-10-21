import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type FileNames = string[];

export const fileNamesSchema: Schema<FileNames> = s.of<FileNames>(s.union([s.array(s.string())]));
