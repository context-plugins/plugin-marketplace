import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An inlined file. */
export type FileInputSource = {
  /** Required. The file's byte contents. */
  content?: string;
  /** Required. The file's display name. */
  displayName?: string;
  /** Required. The file's mime type. */
  mimeType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileInputSourceSchema: Schema<FileInputSource> = s.object<FileInputSource>(
  {
    content: s.optional(s.string()),
    displayName: s.optional(s.string()),
    mimeType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
