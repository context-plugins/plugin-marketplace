import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { details3Schema, type Details3 } from "./details3.js";

export type Error8 = {
  code?: string;
  message?: string;
  details?: Details3;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error8Schema: Schema<Error8> = s.object<Error8>(
  {
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    details: s.optional(s.lazy(() => details3Schema)),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
