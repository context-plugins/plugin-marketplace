import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";
import { details4Schema, type Details4 } from "./details4.js";

export type Error9 = {
  code?: Code1;
  message?: string;
  details?: Details4;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error9Schema: Schema<Error9> = s.object<Error9>(
  {
    code: s.optional(s.lazy(() => code1Schema)),
    message: s.optional(s.string()),
    details: s.optional(s.lazy(() => details4Schema)),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
