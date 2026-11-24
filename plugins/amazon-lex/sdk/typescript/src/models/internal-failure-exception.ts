import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InternalFailureException = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internalFailureExceptionSchema: Schema<InternalFailureException> =
  s.object<InternalFailureException>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
