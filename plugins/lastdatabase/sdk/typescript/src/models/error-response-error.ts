import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorResponseError = {
  /** @default "False" */
  status?: "False";
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>(
  {
    status: s.defaulted(s.literal("False"), "False"),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
