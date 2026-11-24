import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tokenTypeSchema, type TokenType } from "./token-type.js";

/** RFC 7662 token introspection response. */
export type IntrospectionResponse = {
  active: boolean;
  scope?: string;
  clientId?: string;
  /** The token type returned by OAuth2 token endpoints. */
  tokenType?: TokenType;
  exp?: number;
  iat?: number;
  nbf?: number;
  sub?: string;
  aud?: string;
  iss?: string;
  jti?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const introspectionResponseSchema: Schema<IntrospectionResponse> = s.object<IntrospectionResponse>(
  {
    active: s.boolean(),
    scope: s.optional(s.string()),
    clientId: s.optional(s.string()),
    tokenType: s.optional(s.lazy(() => tokenTypeSchema)),
    exp: s.optional(s.int()),
    iat: s.optional(s.int()),
    nbf: s.optional(s.int()),
    sub: s.optional(s.string()),
    aud: s.optional(s.string()),
    iss: s.optional(s.string()),
    jti: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      tokenType: "token_type",
    },
  },
  { additionalProperties: s.json() },
);
