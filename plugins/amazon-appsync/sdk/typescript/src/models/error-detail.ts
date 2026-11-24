import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorDetail = {
  /** The error payload. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorDetailSchema: Schema<ErrorDetail> = s.object<ErrorDetail>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
