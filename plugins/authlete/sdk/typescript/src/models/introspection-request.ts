import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pairSchema, type Pair } from "./pair.js";

export type IntrospectionRequest = {
  /** An access token to introspect. */
  token: string;
  /**
   * A string array listing names of scopes which the caller (= a protected resource endpoint of the
   * service) requires. When the content type of the request from the service is
   * `application/x-www-form-urlencoded`, the format of `scopes` is a space-separated list of scope
   * names.
   *
   * If this parameter is a non-empty array and if it contains a scope which is not covered by the
   * access token,`action=FORBIDDEN` with `error=insufficient_scope` is returned from Authlete.
   */
  scopes?: string[];
  /**
   * A subject (= a user account managed by the service) whom the caller (= a protected resource
   * endpoint of the service) requires.
   *
   * If this parameter is not `null` and if the value does not match the subject who is associated
   * with the access token, `action=FORBIDDEN` with `error=invalid_request` is returned from
   * Authlete.
   */
  subject?: string;
  /**
   * Client certificate in PEM format, used to validate binding against access tokens using the TLS
   * client certificate confirmation method.
   */
  clientCertificate?: string;
  /**
   * `DPoP` header presented by the client during the request to the resource server.
   *
   * The header contains a signed JWT which includes the public key that is paired with the private
   * key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the
   * Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for
   * details.
   */
  dpop?: string;
  /**
   * HTTP method of the request from the client to the protected resource endpoint. This field is
   * used to validate the `DPoP` header.
   *
   * See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
   * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
   */
  htm?: string;
  /**
   * URL of the protected resource endpoint. This field is used to validate the `DPoP` header.
   *
   * See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
   * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
   */
  htu?: string;
  /**
   * The resources specified by the `resource` request parameters in the token request. See
   * "Resource Indicators for OAuth 2.0" for details.
   */
  resources?: string[];
  /**
   * Authentication Context Class Reference values one of which the user authentication performed
   * during the course of issuing the access token must satisfy.
   */
  acrValues?: string[];
  /**
   * The maximum authentication age which is the maximum allowable elapsed time since the user
   * authentication was performed during the course of issuing the access token.
   */
  maxAge?: number;
  /**
   * HTTP Message Components required to be in the signature. If absent, defaults to [ "@method",
   * "@target-uri", "authorization" ].
   */
  requiredComponents?: string[];
  /** The full URL of the userinfo endpoint. */
  uri?: string;
  /** The HTTP message body of the request, if present. */
  message?: string;
  /**
   * HTTP headers to be included in processing the signature. If this is a signed request, this must
   * include the Signature and Signature-Input headers, as well as any additional headers covered by
   * the signature.
   */
  headers?: Pair[];
  /** The target URI of the resource request, including the query part, if any. */
  targetUri?: string;
  /**
   * The flag indicating whether to check if the DPoP proof JWT includes the expected `nonce` value.
   *
   * If this request parameter is set to `true` or if the service's `dpopNonceRequired` property is
   * set to `true`, the `/auth/introspection` API checks if the DPoP proof JWT includes the expected
   * `nonce` value. In this case, the response from the `/auth/introspection` API will include the
   * `dpopNonce` response parameter, which should be used as the value of the DPoP-Nonce HTTP
   * header.
   */
  dpopNonceRequired?: boolean;
  /**
   * The flag indicating whether the resource request contains a request body.
   *
   * When the resource request must comply with the HTTP message signing requirements defined in the
   * FAPI 2.0 Message Signing specification, the `"content-digest"` component identifier must be
   * included in the signature base of the HTTP message signature (see [RFC 9421 HTTP Message
   * Signatures](https://www.rfc-editor.org/rfc/rfc9421.html)) if the resource request contains a
   * request body.
   *
   * When this `requestBodyContained` parameter is set to `true`, Authlete checks whether
   * `"content-digest"` is included in the signature base, if the FAPI profile applies to the
   * resource request.
   */
  requestBodyContained?: boolean;
};

export const introspectionRequestSchema: Schema<IntrospectionRequest> = s.object<IntrospectionRequest>({
  token: s.string(),
  scopes: s.optional(s.array(s.string())),
  subject: s.optional(s.string()),
  clientCertificate: s.optional(s.string()),
  dpop: s.optional(s.string()),
  htm: s.optional(s.string()),
  htu: s.optional(s.string()),
  resources: s.optional(s.array(s.string())),
  acrValues: s.optional(s.array(s.string())),
  maxAge: s.optional(s.int()),
  requiredComponents: s.optional(s.array(s.string())),
  uri: s.optional(s.string()),
  message: s.optional(s.string()),
  headers: s.optional(s.array(s.lazy(() => pairSchema))),
  targetUri: s.optional(s.string()),
  dpopNonceRequired: s.optional(s.boolean()),
  requestBodyContained: s.optional(s.boolean()),
});
