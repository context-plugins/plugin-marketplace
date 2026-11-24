import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type File1 = {
  role: string;
  label: string;
  url: string;
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const file1Schema: Schema<File1> = s.object<File1>(
  {
    role: s.string(),
    label: s.string(),
    url: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
