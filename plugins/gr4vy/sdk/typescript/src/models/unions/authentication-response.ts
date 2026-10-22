import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The transaction status after a the 3DS challenge. This will be null in case of a frictionless 3DS
 * flow.
 */
export type AuthenticationResponse = string;

export const authenticationResponseSchema: Schema<AuthenticationResponse> = s.of<AuthenticationResponse>(
  s.union([s.string()]),
);
