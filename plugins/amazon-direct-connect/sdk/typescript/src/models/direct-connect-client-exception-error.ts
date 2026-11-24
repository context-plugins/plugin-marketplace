import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DirectConnectClientExceptionError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const directConnectClientExceptionErrorSchema: Schema<DirectConnectClientExceptionError> =
  s.object<DirectConnectClientExceptionError>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
