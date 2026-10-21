import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The next action that the authorization server implementation should take. */
export const Action4 = {
  InternalServerError: "INTERNAL_SERVER_ERROR",
  InvalidClient: "INVALID_CLIENT",
  BadRequest: "BAD_REQUEST",
  Password: "PASSWORD",
  Ok: "OK",
  TokenExchange: "TOKEN_EXCHANGE",
  JwtBearer: "JWT_BEARER",
  NativeSso: "NATIVE_SSO",
  IdTokenReissuable: "ID_TOKEN_REISSUABLE",
} as const;
export type Action4 = (typeof Action4)[keyof typeof Action4] | (string & {});

export const action4Schema: EnumSchema<Action4> = s.enumOf<Action4>(Action4);
