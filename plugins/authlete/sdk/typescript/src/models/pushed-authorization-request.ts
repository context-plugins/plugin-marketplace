import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PushedAuthorizationRequest = {
  /**
   * The pushed authorization request body received from the client application.
   *
   * The value of parameters is the entire entity body (which is formatted in
   * `application/x-www-form-urlencoded`) of the request from the client application.
   */
  parameters: string;
  /**
   * The client ID extracted from `Authorization` header of the pushed request from the client
   * application.
   */
  clientId?: string;
  /**
   * The client secret extracted from `Authorization` header of the pushed authorization request
   * from the client application.
   */
  clientSecret?: string;
  /**
   * The client certificate from the MTLS connection to pushed authorization endpoint from the
   * client application.
   */
  clientCertificate?: string;
  /**
   * The certificate path presented by the client during client authentication. These certificates
   * are strings in PEM format.
   */
  clientCertificatePath?: string[];
  /** DPoP Header */
  dpop?: string;
  /** HTTP Method (for DPoP validation). */
  htm?: string;
  /** HTTP URL base (for DPoP validation). */
  htu?: string;
  /**
   * The value of the `OAuth-Client-Attestation` HTTP header, which is defined in the specification
   * of [OAuth 2.0 Attestation-Based Client
   * Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/).
   */
  oauthClientAttestation?: string;
  /**
   * The value of the `OAuth-Client-Attestation-PoP` HTTP header, which is defined in the
   * specification of [OAuth 2.0 Attestation-Based Client
   * Authentication](https://datatracker.ietf.org/doc/draft-ietf-oauth-attestation-based-client-auth/).
   */
  oauthClientAttestationPop?: string;
  /**
   * The flag indicating whether to require the DPoP proof JWT to include the `nonce` claim. Even if
   * the service's `dpopNonceRequired` property is `false`, calling the `/pushed_auth_req` API with
   * this `dpopNonceRequired` parameter `true` will force the Authlete API to check whether the DPoP
   * proof JWT includes the expected `nonce` value.
   */
  dpopNonceRequired?: boolean;
};

export const pushedAuthorizationRequestSchema: Schema<PushedAuthorizationRequest> =
  s.object<PushedAuthorizationRequest>({
    parameters: s.string(),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    clientCertificate: s.optional(s.string()),
    clientCertificatePath: s.optional(s.array(s.string())),
    dpop: s.optional(s.string()),
    htm: s.optional(s.string()),
    htu: s.optional(s.string()),
    oauthClientAttestation: s.optional(s.string()),
    oauthClientAttestationPop: s.optional(s.string()),
    dpopNonceRequired: s.optional(s.boolean()),
  });
