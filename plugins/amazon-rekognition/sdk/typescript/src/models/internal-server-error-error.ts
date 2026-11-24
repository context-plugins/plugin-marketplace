import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InternalServerErrorError = {
  message?: string;
  code?: string;
  /** A universally unique identifier (UUID) for the request. */
  logref?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internalServerErrorErrorSchema: Schema<InternalServerErrorError> =
  s.object<InternalServerErrorError>(
    {
      message: s.optional(s.string()),
      code: s.optional(s.string()),
      logref: s.optional(s.string()),
      _keysMap: {
        message: "Message",
        code: "Code",
        logref: "Logref",
      },
    },
    { additionalProperties: s.json() },
  );
