import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type File = {
  id: string;
  name: string;
  /** Bytes. */
  size: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileSchema: Schema<File> = s.object<File>(
  {
    id: s.string(),
    name: s.string(),
    size: s.int(),
  },
  { additionalProperties: s.json() },
);
