import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  authenticateFinalResponseSchema,
  type AuthenticateFinalResponse,
} from "../authenticate-final-response.js";
import {
  authenticateMultiStepResponseSchema,
  type AuthenticateMultiStepResponse,
} from "../authenticate-multi-step-response.js";

/**
 * Either the next step in a multi-factor flow (`status`, `nextStep`, `allowedMethods`,
 * `authProviders`) or final tokens (`message`, `accessToken`, `refreshToken`).
 */
export type AuthenticateResponse = AuthenticateMultiStepResponse | AuthenticateFinalResponse;

export const authenticateResponseSchema: Schema<AuthenticateResponse> = s.of<AuthenticateResponse>(
  s.union([s.lazy(() => authenticateMultiStepResponseSchema), s.lazy(() => authenticateFinalResponseSchema)]),
);
