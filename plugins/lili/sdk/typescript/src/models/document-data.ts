import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { llcFileTypeSchema, type LlcFileType } from "./llc-file-type.js";

export type DocumentData = {
  /** File content, Base64 decoded */
  content: string;
  /** The file content type. All standard mime types are supported */
  contentType: string;
  /** The name of the file */
  fileName: string;
  /** The type of the file */
  llcFileType?: LlcFileType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentDataSchema: Schema<DocumentData> = s.object<DocumentData>(
  {
    content: s.string(),
    contentType: s.string(),
    fileName: s.string(),
    llcFileType: s.optional(s.lazy(() => llcFileTypeSchema)),
  },
  { additionalProperties: s.json() },
);
