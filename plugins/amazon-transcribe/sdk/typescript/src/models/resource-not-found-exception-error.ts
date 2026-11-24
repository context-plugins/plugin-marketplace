import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceNotFoundExceptionError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceNotFoundExceptionErrorSchema: Schema<ResourceNotFoundExceptionError> =
  s.object<ResourceNotFoundExceptionError>(
    {
      message: s.optional(s.string()),
      _keysMap: {
        message: "Message",
      },
    },
    { additionalProperties: s.json() },
  );
