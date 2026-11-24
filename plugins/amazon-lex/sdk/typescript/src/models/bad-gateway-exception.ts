import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BadGatewayException = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const badGatewayExceptionSchema: Schema<BadGatewayException> = s.object<BadGatewayException>(
  {
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
