import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The next action that the implementation of the JWT issuer metadata endpoint
 * (`/.well-known/jwt-issuer`) should take after getting a response from Authlete's `/vci/jwtissuer`
 * API.
 */
export const Action32 = {
  Ok: "OK",
  NotFound: "NOT_FOUND",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action32 = (typeof Action32)[keyof typeof Action32] | (string & {});

export const action32Schema: EnumSchema<Action32> = s.enumOf<Action32>(Action32);
