import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { signupErrorResponseSchema, type SignupErrorResponse } from "../signup-error-response.js";
import { validateErrorJsonSchema, type ValidateErrorJson } from "../validate-error-json.js";

export type SignupsResponse1 = SignupErrorResponse | ValidateErrorJson;

export const signupsResponse1Schema: Schema<SignupsResponse1> = s.of<SignupsResponse1>(
  s.union([s.lazy(() => signupErrorResponseSchema), s.lazy(() => validateErrorJsonSchema)]),
);
