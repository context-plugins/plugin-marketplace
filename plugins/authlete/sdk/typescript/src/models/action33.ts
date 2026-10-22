import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The next action that the implementation of the JWK Set document endpoint of the credential issuer
 * should take after getting a response from Authlete's `/vci/jwks` API.
 */
export const Action33 = {
  Ok: "OK",
  NotFound: "NOT_FOUND",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action33 = (typeof Action33)[keyof typeof Action33] | (string & {});

export const action33Schema: EnumSchema<Action33> = s.enumOf<Action33>(Action33);
