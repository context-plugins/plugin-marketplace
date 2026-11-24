import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type Error = {
  code?: Code;
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: s.optional(s.lazy(() => codeSchema)),
    message: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
