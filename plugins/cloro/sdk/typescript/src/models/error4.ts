import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code3Schema, type Code3 } from "./code3.js";

export type Error4 = {
  code?: Code3;
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error4Schema: Schema<Error4> = s.object<Error4>(
  {
    code: s.optional(s.lazy(() => code3Schema)),
    message: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
