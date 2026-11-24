import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { details1Schema, type Details1 } from "./details1.js";

export type Error3 = {
  code?: string;
  message?: string;
  /** One entry per invalid field. Sent on request-body validation errors. */
  details?: Details1[];
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error3Schema: Schema<Error3> = s.object<Error3>(
  {
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    details: s.optional(s.array(s.lazy(() => details1Schema))),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
