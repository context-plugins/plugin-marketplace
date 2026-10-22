import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FileBuiltInTool = {
  /**
   * The type of the file parser tool. Only .txt and .pdf files are supported.
   *
   * @default "file:text"
   */
  type?: "file:text";
  /** A List of file IDs. For now, only one file is supported. */
  files: string[];
};

export const fileBuiltInToolSchema: Schema<FileBuiltInTool> = s.object<FileBuiltInTool>({
  type: s.defaulted(s.literal("file:text"), "file:text"),
  files: s.array(s.string()),
});
