import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cimdOptionsSchema, type CimdOptions } from "./cimd-options.js";

export type DeviceAuthorizationRequest = {
  /**
   * Parameters of a device authorization request which are the request parameters that the device
   * authorization endpoint of the authorization server implementation received from the client
   * application.
   *
   * The value of `parameters` is the entire entity body (which is formatted in
   * `application/x-www-form-urlencoded`) of the request from the client application.
   */
  parameters: string;
  /**
   * The client ID extracted from Authorization header of the device authorization request from the
   * client application.
   *
   * If the device authorization endpoint of the authorization server implementation supports Basic
   * `Authentication` as a means of client authentication, and the request from the client
   * application contained its client ID in `Authorization` header, the value should be extracted
   * and set to this parameter.
   */
  clientId?: string;
  /**
   * The client secret extracted from `Authorization` header of the device authorization request
   * from the client application.
   *
   * If the device authorization endpoint of the authorization server implementation supports Basic
   * Authentication as a means of client authentication, and the request from the client application
   * contained its client secret in `Authorization` header, the value should be extracted and set to
   * this parameter.
   */
  clientSecret?: string;
  /**
   * The client certificate used in the TLS connection between the client application and the device
   * authorization endpoint of the authorization server.
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

export const deviceAuthorizationRequestSchema: Schema<DeviceAuthorizationRequest> =
  s.object<DeviceAuthorizationRequest>({
    parameters: s.string(),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    clientCertificate: s.optional(s.string()),
    clientCertificatePath: s.optional(s.array(s.string())),
    oauthClientAttestation: s.optional(s.string()),
    oauthClientAttestationPop: s.optional(s.string()),
    cimdOptions: s.optional(s.lazy(() => cimdOptionsSchema)),
  });
