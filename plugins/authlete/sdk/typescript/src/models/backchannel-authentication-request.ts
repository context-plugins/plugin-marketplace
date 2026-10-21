import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cimdOptionsSchema, type CimdOptions } from "./cimd-options.js";

export type BackchannelAuthenticationRequest = {
  /**
   * Parameters of a backchannel authentication request which are the request parameters that the
   * backchannel authentication endpoint of the OpenID provider implementation received from the
   * client application.
   *
   * The value of `parameters` is the entire entity body (which is formatted in
   * `application/x-www-form-urlencoded`) of the request from the client application.
   */
  parameters: string;
  /**
   * The client ID extracted from Authorization header of the backchannel authentication request
   * from the client application.
   *
   * If the backchannel authentication endpoint of the OpenID provider implementation supports Basic
   * Authentication as a means of client authentication, and the request from the client application
   * contained its client ID in Authorization header, the value should be extracted and set to this
   * parameter.
   */
  clientId?: string;
  /**
   * The client secret extracted from Authorization header of the backchannel authentication request
   * from the client application.
   *
   * If the backchannel authentication endpoint of the OpenID provider implementation supports Basic
   * Authentication as a means of client authentication, and the request from the client application
   * contained its client secret in Authorization header, the value should be extracted and set to
   * this parameter.
   */
  clientSecret?: string;
  /**
   * The client certification used in the TLS connection between the client application and the
   * backchannel authentication endpoint of the OpenID provider.
   */
  clientCertificate?: string;
  /**
   * The client certificate path presented by the client during client authentication. Each element
   * is a string in PEM format.
   */
  clientCertificatePath?: string[];
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
   * Options for [OAuth Client ID Metadata
   * Document](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/)
   * (CIMD).
   *
   * These options allow per-request control over CIMD behavior, taking precedence over
   * service-level configuration when provided.
   */
  cimdOptions?: CimdOptions;
};

export const backchannelAuthenticationRequestSchema: Schema<BackchannelAuthenticationRequest> =
  s.object<BackchannelAuthenticationRequest>({
    parameters: s.string(),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    clientCertificate: s.optional(s.string()),
    clientCertificatePath: s.optional(s.array(s.string())),
    oauthClientAttestation: s.optional(s.string()),
    oauthClientAttestationPop: s.optional(s.string()),
    cimdOptions: s.optional(s.lazy(() => cimdOptionsSchema)),
  });
