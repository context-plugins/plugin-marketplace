import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error5 = {
  code?: string;
  /**
   * For example `Maximum retries exceeded` when every attempt failed, or `Internal server error`
   * for an unexpected failure.
   */
  message?: string;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error5Schema: Schema<Error5> = s.object<Error5>(
  {
    code: s.optional(s.string()),
    message: s.optional(s.string()),
    timestamp: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
