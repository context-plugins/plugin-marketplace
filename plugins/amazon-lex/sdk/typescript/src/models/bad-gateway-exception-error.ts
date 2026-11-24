import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BadGatewayExceptionError = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const badGatewayExceptionErrorSchema: Schema<BadGatewayExceptionError> =
  s.object<BadGatewayExceptionError>(
    {
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
