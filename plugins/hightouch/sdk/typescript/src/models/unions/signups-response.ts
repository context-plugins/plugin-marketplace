import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { createSignupResponseSchema, type CreateSignupResponse } from "../create-signup-response.js";
import { signupErrorResponseSchema, type SignupErrorResponse } from "../signup-error-response.js";

export type SignupsResponse = CreateSignupResponse | SignupErrorResponse;

export const signupsResponseSchema: Schema<SignupsResponse> = s.of<SignupsResponse>(
  s.union([s.lazy(() => createSignupResponseSchema), s.lazy(() => signupErrorResponseSchema)]),
);
