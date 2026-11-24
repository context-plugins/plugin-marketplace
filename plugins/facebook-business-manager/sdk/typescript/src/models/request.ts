import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Request = {
  /** Updated post message text */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestSchema: Schema<Request> = s.object<Request>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
