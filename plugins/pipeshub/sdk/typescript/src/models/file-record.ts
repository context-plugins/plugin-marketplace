import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** File-specific metadata (present when recordType is FILE) */
export type FileRecord = {
  id?: string;
  name?: string;
  extension?: string;
  mimeType?: string;
  sizeInBytes?: number;
  webUrl?: string;
  path?: string | null;
  isFile?: boolean;
};

export const fileRecordSchema: Schema<FileRecord> = s.object<FileRecord>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  extension: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  sizeInBytes: s.optional(s.int()),
  webUrl: s.optional(s.string()),
  path: s.optionalNullable(s.string()),
  isFile: s.optional(s.boolean()),
});
