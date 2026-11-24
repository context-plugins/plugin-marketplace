import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type File = {
  /** File role (frontside, backside) */
  role: string;
  /** File label */
  label: string;
  /** File download URL */
  url: string;
  /** Original file name */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileSchema: Schema<File> = s.object<File>(
  {
    role: s.string(),
    label: s.string(),
    url: s.string(),
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
