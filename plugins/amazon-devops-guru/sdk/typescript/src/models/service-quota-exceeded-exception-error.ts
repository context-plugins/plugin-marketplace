import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceQuotaExceededExceptionError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceQuotaExceededExceptionErrorSchema: Schema<ServiceQuotaExceededExceptionError> =
  s.object<ServiceQuotaExceededExceptionError>(
    {
      message: s.optional(s.string()),
      _keysMap: {
        message: "Message",
      },
    },
    { additionalProperties: s.json() },
  );
