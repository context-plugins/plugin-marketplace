import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FileRep = {
  /** The imported file name, including the extension */
  filename?: string;
  /** The imported file status */
  status?: string;
};

export const fileRepSchema: Schema<FileRep> = s.object<FileRep>({
  filename: s.optional(s.string()),
  status: s.optional(s.string()),
});
