import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { encodingSchema, type Encoding } from "./encoding.js";

export type File = {
  path: string;
  content: string;
  encoding?: Encoding;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const fileProperties: s.Shape<File> = {
  path: s.string(),
  content: s.string(),
  encoding: s.optional(s.lazy(() => encodingSchema)),
};

export const fileInternalSchema: Schema<File> = s.object<File>(fileProperties, {
  additionalProperties: s.json(),
});

export const fileSchema: Schema<File> = s.lazySchema(() =>
  s.object<File>(
    {
      ...fileProperties,
      path: s.string().check(s.minLength(1), s.maxLength(500)),
      content: s.string().check(s.maxLength(2097152)),
    },
    { additionalProperties: s.json() },
  ),
);
