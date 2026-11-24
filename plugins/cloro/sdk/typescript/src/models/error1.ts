import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";
import { detailsSchema, type Details } from "./details.js";

export type Error1 = {
  code?: Code1;
  message?: string;
  details?: Details;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error1Schema: Schema<Error1> = s.object<Error1>(
  {
    code: s.optional(s.lazy(() => code1Schema)),
    message: s.optional(s.string()),
    details: s.optional(s.lazy(() => detailsSchema)),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
