import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

/** Per-item error in a batch response */
export type V3ItemError = {
  code?: Code;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3ItemErrorSchema: Schema<V3ItemError> = s.object<V3ItemError>(
  {
    code: s.optional(s.lazy(() => codeSchema)),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
