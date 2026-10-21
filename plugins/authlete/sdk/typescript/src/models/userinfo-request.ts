import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pairSchema, type Pair } from "./pair.js";

export type UserinfoRequest = {
  /** An access token. */
  token: string;
  /**
   * Client certificate used in the TLS connection established between the client application and
   * the userinfo endpoint.
   *
   * The value of this request parameter is referred to when the access token given to the userinfo
   * endpoint was bound to a client certificate when it was issued. See [OAuth 2.0 Mutual TLS Client
   * Authentication and Certificate-Bound Access Tokens] (https://datatracker.ietf.org/doc/rfc8705/)
   * for details about the specification of certificate-bound access tokens.
   */
  clientCertificate?: string;
  /**
   * `DPoP` header presented by the client during the request to the user info endpoint.
   *
   * The header contains a signed JWT which includes the public key that is paired with the private
   * key used to sign the JWT. See [OAuth 2.0 Demonstration of Proof-of-Possession at the
   * Application Layer (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for
   * details.
   */
  dpop?: string;
  /**
   * HTTP method of the user info request. This field is used to validate the DPoP header. In normal
   * cases, the value is either `GET` or `POST`.
   */
  htm?: string;
  /**
   * URL of the user info endpoint. This field is used to validate the DPoP header.
   *
   * If this parameter is omitted, the `userInfoEndpoint` property of the service is used as the
   * default value. See [OAuth 2.0 Demonstration of Proof-of-Possession at the Application Layer
   * (DPoP)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-dpop) for details.
   */
  htu?: string;
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
  /** The target URI of the userinfo request, including the query part, if any. */
  targetUri?: string;
  /**
   * The flag indicating whether to check if the DPoP proof JWT includes the expected `nonce` value.
   *
   * If this request parameter is set to `true` or if the service's `dpopNonceRequired` property is
   * set to `true`, the `/auth/userinfo` API checks if the DPoP proof JWT includes the expected
   * `nonce` value. In this case, the response from the `/auth/userinfo` API will include the
   * `dpopNonce` response parameter, which should be used as the value of the DPoP-Nonce HTTP
   * header.
   */
  dpopNonceRequired?: boolean;
  /** The flag indicating whether the userinfo request contains a request body. */
  requestBodyContained?: boolean;
};

export const userinfoRequestSchema: Schema<UserinfoRequest> = s.object<UserinfoRequest>({
  token: s.string(),
  clientCertificate: s.optional(s.string()),
  dpop: s.optional(s.string()),
  htm: s.optional(s.string()),
  htu: s.optional(s.string()),
  uri: s.optional(s.string()),
  message: s.optional(s.string()),
  headers: s.optional(s.array(s.lazy(() => pairSchema))),
  targetUri: s.optional(s.string()),
  dpopNonceRequired: s.optional(s.boolean()),
  requestBodyContained: s.optional(s.boolean()),
});
