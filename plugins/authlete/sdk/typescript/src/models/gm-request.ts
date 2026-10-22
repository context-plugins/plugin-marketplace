import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantManagementActionSchema, type GrantManagementAction } from "./grant-management-action.js";

export type GmRequest = {
  /** An access token to introspect. */
  accessToken?: string;
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
   * The grant management action of the device authorization request.
   *
   * The `grant_management_action` request parameter is defined in [Grant Management for OAuth
   * 2.0](https://openid.net/specs/fapi-grant-management.html).
   */
  gmAction?: GrantManagementAction;
  /**
   * The value of the `grant_id` request parameter of the device authorization request.
   *
   * The `grant_id` request parameter is defined in [Grant Management for OAuth
   * 2.0](https://openid.net/specs/fapi-grant-management.html) , which is supported by Authlete 2.3
   * and newer versions.
   */
  grantId?: string;
  /**
   * The flag indicating whether to require the DPoP proof JWT to include the `nonce` claim. Even if
   * the service's `dpopNonceRequired` property is `false`, calling the `/auth/gm` API with this
   * `dpopNonceRequired` parameter `true` will force the Authlete API to check whether the DPoP
   * proof JWT includes the expected `nonce` value.
   */
  dpopNonceRequired?: boolean;
};

export const gmRequestSchema: Schema<GmRequest> = s.object<GmRequest>({
  accessToken: s.optional(s.string()),
  clientCertificate: s.optional(s.string()),
  dpop: s.optional(s.string()),
  htm: s.optional(s.string()),
  htu: s.optional(s.string()),
  gmAction: s.optional(s.lazy(() => grantManagementActionSchema)),
  grantId: s.optional(s.string()),
  dpopNonceRequired: s.optional(s.boolean()),
});
