import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InternalServerErrorError = {
  /** @default "Internal Server Error" */
  enumInternalServerError?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internalServerErrorErrorSchema: Schema<InternalServerErrorError> =
  s.object<InternalServerErrorError>(
    {
      enumInternalServerError: s.defaulted(s.string(), "Internal Server Error"),
      _keysMap: {
        enumInternalServerError: "Enum_Internal Server Error",
      },
    },
    { additionalProperties: s.json() },
  );
