import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The bundle, as it was when the import started */
export type ImportFile1 = {
  id: string;
  filename: string;
  sizeBytes: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const importFile1Schema: Schema<ImportFile1> = s.object<ImportFile1>(
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
