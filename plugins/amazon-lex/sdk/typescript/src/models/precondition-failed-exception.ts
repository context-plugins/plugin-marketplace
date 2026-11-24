import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PreconditionFailedException = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const preconditionFailedExceptionSchema: Schema<PreconditionFailedException> =
  s.object<PreconditionFailedException>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
