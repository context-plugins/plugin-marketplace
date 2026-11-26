import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error2 = {
  message?: string;
  statusCode?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2Schema: Schema<Error2> = s.object<Error2>(
  {
    message: s.optional(s.string()),
    statusCode: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
