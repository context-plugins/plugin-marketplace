import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignupErrorResponse = {
  message: string;
  code: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signupErrorResponseSchema: Schema<SignupErrorResponse> = s.object<SignupErrorResponse>(
  {
    message: s.string(),
    code: s.string(),
  },
  { additionalProperties: s.json() },
);
