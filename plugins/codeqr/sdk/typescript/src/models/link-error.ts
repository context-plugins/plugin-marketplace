import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type LinkError = {
  /** The link that caused the error. */
  link?: Record<string, unknown>;
  /** The error message. */
  error: string;
  /** The error code. */
  code: Code;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkErrorSchema: Schema<LinkError> = s.object<LinkError>(
  {
    link: s.optional(s.record(s.string(), s.unknown())),
    error: s.string(),
    code: codeSchema,
  },
  { additionalProperties: s.json() },
);
