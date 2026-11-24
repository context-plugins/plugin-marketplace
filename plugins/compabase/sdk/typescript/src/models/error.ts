import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

/** Structured domain error (used by 400/404/429 responses). */
export type Error = {
  /** Machine-readable domain error code. */
  code?: Code;
  message?: string;
  details?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: s.optional(s.lazy(() => codeSchema)),
    message: s.optional(s.string()),
    details: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
