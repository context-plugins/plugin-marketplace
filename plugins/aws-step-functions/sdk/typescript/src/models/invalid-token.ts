import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvalidToken = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invalidTokenSchema: Schema<InvalidToken> = s.object<InvalidToken>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
