import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ImportFile = {
  id: string;
  filename: string;
  sizeBytes: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importFileSchema: Schema<ImportFile> = s.object<ImportFile>(
  {
    id: s.string(),
    filename: s.string(),
    sizeBytes: s.int(),
    _keysMap: {
      sizeBytes: "size_bytes",
    },
  },
  { additionalProperties: s.json() },
);
