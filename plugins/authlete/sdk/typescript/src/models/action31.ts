import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The next action that the implementation of the credential issuer metadata endpoint
 * (`/.well-known/openid-credential-issuer`) should take after getting a response from Authlete's
 * `/vci/metadata` API.
 */
export const Action31 = {
  Ok: "OK",
  NotFound: "NOT_FOUND",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action31 = (typeof Action31)[keyof typeof Action31] | (string & {});

export const action31Schema: EnumSchema<Action31> = s.enumOf<Action31>(Action31);
